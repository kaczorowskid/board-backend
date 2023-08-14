export const sequelizeWithError = async <T>(
  callback: () => Promise<T>
): Promise<[T | undefined, string | undefined]> => {
  try {
    const data = await callback();
    return [data, undefined];
  } catch (e) {
    const error = e as unknown as Error;
    return [undefined, error.message];
  }
};
