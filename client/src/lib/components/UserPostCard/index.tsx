import { Card, Spin, Typography } from 'antd';
import Avatar from 'antd/lib/avatar/avatar';
import React from 'react';
import moment from 'moment';
import { IPostUser } from 'store/modules/posts/posts.types';
import { Link } from 'react-router-dom';

const { Paragraph } = Typography;

type Props = {
  user: IPostUser;
  createdAt: string;
};

const UserPostCard: React.FC<Props> = ({ user, createdAt }) => {
  if (!user) return <Spin />;

  const { name, avatar, id } = user;

  return (
    <Card className="user-post__card">
      <Avatar src={avatar} className="user-post__card--avatar" />
      <Paragraph type="secondary" className="user-post__card--name">
        <Link to={`/users/${id}`}>{name}</Link>
      </Paragraph>
      <Paragraph type="secondary" className="user-post__card--date">
        asked {moment(createdAt).fromNow()}
      </Paragraph>
    </Card>
  );
};

export default UserPostCard;
