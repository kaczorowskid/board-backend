export const sequelizeWithError = <T>(callback: () => T): T => {
  let data: T | undefined = undefined;

  try {
    data = callback();
  } catch (e) {
    console.log("error ", e);
  } finally {
    return data as T;
  }
};
