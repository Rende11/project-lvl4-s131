import user from './User';
import task from './Task';

export default async () => {
  await user.sync();
  await task.sync();
};
