import { useState, useEffect, useCallback } from 'react';
import { useSearchParams } from 'react-router-dom';
import type { TableState, SortDirection, SortField } from '../types';

export const useUrlState = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  
  const getInitialState = (): TableState => {
    return {
      page: parseInt(searchParams.get('page') || '1', 10),
      pageSize: parseInt(searchParams.get('pageSize') || '10', 10),
      search: searchParams.get('search') || '',
      sortField: (searchParams.get('sortField') as SortField) || null,
      sortDirection: (searchParams.get('sortDirection') as SortDirection) || null,
    };
  };

  const [state, setState] = useState<TableState>(getInitialState);

  const updateUrlParams = useCallback((newState: TableState) => {
    const params = new URLSearchParams();
    
    if (newState.page > 1) params.set('page', newState.page.toString());
    if (newState.pageSize !== 10) params.set('pageSize', newState.pageSize.toString());
    if (newState.search) params.set('search', newState.search);
    if (newState.sortField) params.set('sortField', newState.sortField);
    if (newState.sortDirection) params.set('sortDirection', newState.sortDirection);
    
    setSearchParams(params);
  }, [setSearchParams]);

  const updateState = useCallback((updates: Partial<TableState>) => {
    setState(prevState => {
      const newState = { ...prevState, ...updates };
      updateUrlParams(newState);
      return newState;
    });
  }, [updateUrlParams]);

  // Sync state with URL changes
  useEffect(() => {
    const newState = getInitialState();
    setState(newState);
  }, [searchParams]);

  return { state, updateState };
};
