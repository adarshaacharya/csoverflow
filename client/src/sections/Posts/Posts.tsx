import { Button, Divider, Layout, Row, Typography } from 'antd';
import { ErrorBanner } from 'lib/components/ErrorBanner';
import { PageSkeleton } from 'lib/components/PageSkeleton';
import Sidebar from 'lib/components/Sidebar';
import { useScrollToTop } from 'lib/hooks';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'store/modules/combine-reducer';
import { getPosts } from 'store/modules/posts/posts.actions';
import { PostItem } from './components';

const { Content } = Layout;
const { Title, Paragraph } = Typography;

const Posts = () => {
  const dispatch = useDispatch();

  const { posts, loading, error } = useSelector((state: RootState) => state.post);

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  useScrollToTop();

  if (loading) {
    return (
      <>
        <Sidebar />
        <Content className="posts">
          <PageSkeleton />
        </Content>
      </>
    );
  }

  if (error) {
    return (
      <Content className="posts">
        <ErrorBanner description="Posts may not exist or we 've encounted an error. Please try again soon." />
        <PageSkeleton />
      </Content>
    );
  }

  const postsSectionElement = (
    <>
      {posts.length < 1 ? (
        <Paragraph>It appears no questions has been asked. Be first one to create it.</Paragraph>
      ) : (
        posts.map(post => (
          <Row className="post__layout" id={`${post.id}`}>
            <PostItem post={post} />
          </Row>
        ))
      )}
    </>
  );

  return (
    <>
      <Sidebar />
      <Content className="posts">
        <Row justify="space-between">
          <Title level={3} className="posts__title">
            Top Questions
          </Title>
          <Button type="primary">Ask Question</Button>
        </Row>
        <Divider />
        {postsSectionElement}
      </Content>
    </>
  );
};

export default Posts;
