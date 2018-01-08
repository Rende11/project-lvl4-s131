import user from './User';

export default async () => {
  await user.sync();
};
