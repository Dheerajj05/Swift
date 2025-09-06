import React, { useState, useEffect, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { apiService } from '../services/api';
import { useUrlState } from '../hooks/useUrlState';
import type { Comment, SortDirection, SortField } from '../types';

import { DashboardHeader } from '../components/dashboard/atoms/DashboardHeader';
import { LoadingSpinner } from '../components/dashboard/atoms/LoadingSpinner';
import { ErrorMessage } from '../components/dashboard/atoms/ErrorMessage';
import { ControlsSection } from '../components/dashboard/molecules/ControlsSection';
import { CommentsTable } from '../components/dashboard/molecules/CommentsTable';
import { PaginationControls } from '../components/dashboard/molecules/PaginationControls';

const DashboardScreen: React.FC = () => {
  const [comments, setComments] = useState<Comment[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { state, updateState } = useUrlState();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchComments = async () => {
      try {
        setLoading(true);
        const commentsData = await apiService.getComments();
        setComments(commentsData);
      } catch (err) {
        setError('Failed to fetch comments data');
        console.error('Error fetching comments:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchComments();
  }, []);

  const filteredAndSortedComments = useMemo(() => {
    let filtered = comments;

    if (state.search) {
      const searchLower = state.search.toLowerCase();
      filtered = comments.filter(comment => 
        comment.user.fullName.toLowerCase().includes(searchLower) ||
        comment.user.username.toLowerCase().includes(searchLower) ||
        comment.user.email.toLowerCase().includes(searchLower) ||
        comment.user.phone.toLowerCase().includes(searchLower) ||
        comment.body.toLowerCase().includes(searchLower)
      );
    }

    if (state.sortField && state.sortDirection) {
      filtered = [...filtered].sort((a, b) => {
        let aValue: string | number;
        let bValue: string | number;

        switch (state.sortField) {
          case 'postId':
            aValue = a.postId;
            bValue = b.postId;
            break;
          case 'name':
            aValue = a.user.fullName;
            bValue = b.user.fullName;
            break;
          case 'email':
            aValue = a.user.email;
            bValue = b.user.email;
            break;
          default:
            return 0;
        }

        if (typeof aValue === 'string' && typeof bValue === 'string') {
          const comparison = aValue.localeCompare(bValue);
          return state.sortDirection === 'asc' ? comparison : -comparison;
        } else {
          const comparison = (aValue as number) - (bValue as number);
          return state.sortDirection === 'asc' ? comparison : -comparison;
        }
      });
    }

    return filtered;
  }, [comments, state.search, state.sortField, state.sortDirection]);

  const totalItems = filteredAndSortedComments.length;
  const totalPages = Math.ceil(totalItems / state.pageSize);
  const startIndex = (state.page - 1) * state.pageSize;
  const endIndex = startIndex + state.pageSize;
  const paginatedComments = filteredAndSortedComments.slice(startIndex, endIndex);

  const handleSearch = (value: string) => {
    updateState({ search: value, page: 1 });
  };

  const handlePageSizeChange = (value: number) => {
    updateState({ pageSize: value, page: 1 });
  };

  const handleSort = (field: SortField) => {
    let newDirection: SortDirection = 'asc';
    
    if (state.sortField === field) {
      if (state.sortDirection === 'asc') {
        newDirection = 'desc';
      } else if (state.sortDirection === 'desc') {
        newDirection = null;
      } else {
        newDirection = 'asc';
      }
    }

    updateState({ 
      sortField: newDirection ? field : null, 
      sortDirection: newDirection 
    });
  };

  const handlePageChange = (newPage: number) => {
    if (newPage >= 1 && newPage <= totalPages) {
      updateState({ page: newPage });
    }
  };

  const navigateToProfile = () => {
    navigate('/profile');
  };

  if (loading) {
    return <LoadingSpinner message="Loading comments..." size="lg" />;
  }

  if (error) {
    return (
      <ErrorMessage 
        message={error} 
        onRetry={() => window.location.reload()} 
      />
    );
  }

  return (
    <div className="h-full bg-gradient-to-br from-blue-50 via-white to-indigo-50 flex flex-col">
      <div className="flex-1 overflow-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <DashboardHeader onProfileClick={navigateToProfile} />
          
          <ControlsSection
            searchValue={state.search}
            onSearchChange={handleSearch}
            pageSize={state.pageSize}
            onPageSizeChange={handlePageSizeChange}
            sortField={state.sortField}
            sortDirection={state.sortDirection}
            onSort={handleSort}
          />

          <CommentsTable
            comments={paginatedComments}
            searchTerm={state.search}
          />

          <PaginationControls
            currentPage={state.page}
            totalPages={totalPages}
            totalItems={totalItems}
            pageSize={state.pageSize}
            onPageChange={handlePageChange}
          />
        </div>
      </div>
    </div>
  );
};

export default DashboardScreen;