import React from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../../ui/table';
import type { Comment } from '../../../types';

interface CommentsTableProps {
  comments: Comment[];
  searchTerm?: string;
}

export const CommentsTable: React.FC<CommentsTableProps> = ({
  comments,
  searchTerm
}) => {
  return (
    <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg border border-white/20 overflow-hidden">
      <Table>
        <TableHeader>
          <TableRow className="bg-gray-50/50">
            <TableHead className="font-semibold text-gray-700">Post ID</TableHead>
            <TableHead className="font-semibold text-gray-700">Name</TableHead>
            <TableHead className="font-semibold text-gray-700">Email</TableHead>
            <TableHead className="font-semibold text-gray-700">Comment</TableHead>
            <TableHead className="font-semibold text-gray-700">Likes</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {comments.length === 0 ? (
            <TableRow>
              <TableCell colSpan={5} className="text-center py-12 text-gray-500">
                {searchTerm ? 'No comments found matching your search.' : 'No comments available.'}
              </TableCell>
            </TableRow>
          ) : (
            comments.map((comment) => (
              <TableRow key={comment.id} className="hover:bg-blue-50/30 transition-colors">
                <TableCell className="font-semibold text-blue-600">{comment.postId}</TableCell>
                <TableCell className="font-medium text-gray-900">{comment.user.fullName}</TableCell>
                <TableCell className="text-indigo-600 font-medium">{comment.user.email}</TableCell>
                <TableCell className="max-w-md">
                  <p className="truncate text-gray-700" title={comment.body}>
                    {comment.body}
                  </p>
                </TableCell>
                <TableCell>
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold bg-gradient-to-r from-green-100 to-emerald-100 text-green-800 border border-green-200">
                    {comment.likes}
                  </span>
                </TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </div>
  );
};
