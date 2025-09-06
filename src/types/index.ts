/**
 * Represents a user entity from the API
 */
export interface User {
  /** Unique identifier for the user */
  id: number;
  /** User's first name */
  firstName: string;
  /** User's last name */
  lastName: string;
  /** User's age in years */
  age: number;
  /** User's email address */
  email: string;
  /** User's phone number */
  phone: string;
  /** User's username */
  username: string;
  /** URL to user's profile image */
  image: string;
  /** User's address information */
  address: {
    /** City name */
    city: string;
    /** State name */
    state: string;
  };
  /** Company information */
  company: {
    /** Company name */
    name: string;
  };
}

/**
 * Represents a comment entity from the API
 */
export interface Comment {
  /** Unique identifier for the comment */
  id: number;
  /** Comment text content */
  body: string;
  /** ID of the post this comment belongs to */
  postId: number;
  /** Number of likes on the comment */
  likes: number;
  /** User who made the comment */
  user: {
    /** User's unique identifier */
    id: number;
    /** User's username */
    username: string;
    /** User's full name */
    fullName: string;
    /** User's email address */
    email: string;
    /** User's phone number */
    phone: string;
  };
}

/**
 * API response structure for users endpoint
 */
export interface UsersResponse {
  /** Array of user objects */
  users: User[];
  /** Total number of users available */
  total: number;
  /** Number of users skipped */
  skip: number;
  /** Maximum number of users returned */
  limit: number;
}

/**
 * API response structure for comments endpoint
 */
export interface CommentsResponse {
  /** Array of comment objects */
  comments: Comment[];
  /** Total number of comments available */
  total: number;
  /** Number of comments skipped */
  skip: number;
  /** Maximum number of comments returned */
  limit: number;
}

/**
 * Sort direction for table columns
 */
export type SortDirection = 'asc' | 'desc' | null;

/**
 * Available fields for sorting
 */
export type SortField = 'postId' | 'name' | 'email' | null;

/**
 * State interface for table pagination and filtering
 */
export interface TableState {
  /** Current page number (1-based) */
  page: number;
  /** Number of items per page */
  pageSize: number;
  /** Search query string */
  search: string;
  /** Field to sort by */
  sortField: SortField;
  /** Direction to sort */
  sortDirection: SortDirection;
}
