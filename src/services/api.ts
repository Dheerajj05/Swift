import { axiosInstance } from '../../axios';
import type { User, Comment, UsersResponse, CommentsResponse } from '../types';

/**
 * API service for handling data operations with the external API
 */
export const apiService = {
  /**
   * Fetches all users from the API
   * @returns Promise<User[]> Array of user objects
   * @throws Error when the API request fails
   */
  async getUsers(): Promise<User[]> {
    try {
      const response = await axiosInstance.get<UsersResponse>('/users');
      return response.data.users;
    } catch (error) {
      console.error('Error fetching users:', error);
      throw error;
    }
  },

  /**
   * Fetches all comments from the API and enriches them with complete user data
   * @returns Promise<Comment[]> Array of comment objects with full user information
   * @throws Error when the API request fails
   */
  async getComments(): Promise<Comment[]> {
    try {
      // Fetch both comments and users to merge complete user data
      const [commentsResponse, usersResponse] = await Promise.all([
        axiosInstance.get<CommentsResponse>('/comments'),
        axiosInstance.get<UsersResponse>('/users')
      ]);
      
      const comments = commentsResponse.data.comments;
      const users = usersResponse.data.users;
      
      // Create a user lookup map for efficient merging
      const userMap = new Map(users.map(user => [user.id, user]));
      
      // Merge comments with complete user data
      const enrichedComments = comments.map(comment => {
        const fullUser = userMap.get(comment.user.id);
        return {
          ...comment,
          user: {
            ...comment.user,
            email: fullUser?.email || '',
            phone: fullUser?.phone || ''
          }
        };
      });
      
      return enrichedComments;
    } catch (error) {
      console.error('Error fetching comments:', error);
      throw error;
    }
  },

  /**
   * Fetches the first user from the users list
   * @returns Promise<User | null> First user object or null if no users exist
   * @throws Error when the API request fails
   */
  async getFirstUser(): Promise<User | null> {
    try {
      const users = await this.getUsers();
      return users.length > 0 ? users[0] : null;
    } catch (error) {
      console.error('Error fetching first user:', error);
      throw error;
    }
  }
};
