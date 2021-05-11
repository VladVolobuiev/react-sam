import React from 'react';
import Paginator from '../common/Paginator/Paginator';
import User from './User';

let Users = ({
  currentPage,
  onPageChanged,
  totalUsersCount,
  pageSize,
  users,
  followingInProgress,
  unfollow,
  follow,
  ...props
}) => {
  return (
    <div>
      <Paginator
        currentPage={currentPage}
        onPageChanged={onPageChanged}
        pageSize={pageSize}
        totalUsersCount={totalUsersCount}
      />
      <div>
        {users.map((u) => (
          <User
            follow={follow}
            unfollow={unfollow}
            followingInProgress={followingInProgress}
            user={u}
            key={u.id}
          />
        ))}
      </div>
    </div>
  );
};

export default Users;
