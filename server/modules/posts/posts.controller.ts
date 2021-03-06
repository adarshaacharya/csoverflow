import { AuthRequest } from '../../common/types/types';
import { NextFunction, Response } from 'express';
import { postsService } from './posts.service';
import { validateIdOrThrow } from '../../common/validators';
import { convertToArray } from './posts.utils';

class PostsController {
  public async findAll(_req: AuthRequest, res: Response, next: NextFunction) {
    try {
      const posts = await postsService.findAll();
      res.status(201).json(posts);
    } catch (error) {
      next(error);
    }
  }

  public async findTopPosts(_req: AuthRequest, res: Response, next: NextFunction) {
    try {
      const posts = await postsService.findTopPosts();
      res.status(201).json(posts);
    } catch (error) {
      next(error);
    }
  }

  public async findOneById(req: AuthRequest, res: Response, next: NextFunction) {
    try {
      validateIdOrThrow(+req.params.id);
      const post = await postsService.findOneByIdOrThrow(+req.params.id);
      res.status(201).json(post);
    } catch (error) {
      next(error);
    }
  }

  public async findByTag(req: AuthRequest, res: Response, next: NextFunction) {
    try {
      const posts = await postsService.findByTag(req.params.tagname);
      res.status(201).json(posts);
    } catch (error) {
      next(error);
    }
  }

  public async createOne(req: AuthRequest, res: Response, next: NextFunction): Promise<void> {
    try {
      const { title, body, tags } = req.body;
      const tagsArr = Array.isArray(tags) ? tags : convertToArray(tags);

      const post = await postsService.createOne({
        title,
        body,
        userId: req.user!.id, // from token
        tags: tagsArr,
      });

      res.status(201).json(post);
    } catch (error) {
      next(error);
    }
  }

  public async updateOne(req: AuthRequest, res: Response, next: NextFunction): Promise<void> {
    try {
      validateIdOrThrow(+req.params.id);
      const postId = +req.params.id;
      const userId = validateIdOrThrow(req.user!.id);

      const { title, body, tags } = req.body;

      const tagsArr = Array.isArray(tags) ? tags : convertToArray(tags);
      const updates = { title, body, tags: tagsArr };
      const post = await postsService.updateOne(postId, updates, userId);
      res.status(201).json(post);
    } catch (error) {
      next(error);
    }
  }

  public async deleteOne(req: AuthRequest, res: Response, next: NextFunction) {
    try {
      validateIdOrThrow(+req.params.id);
      const postId = +req.params.id;
      const userId = validateIdOrThrow(req.user!.id);
      await postsService.deleteOne(postId, userId);
      res.status(201).json({ msg: 'Post has been deleted successfully' });
    } catch (error) {
      next(error);
    }
  }
}

export const postsController = new PostsController();
