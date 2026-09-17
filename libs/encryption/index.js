import bcrypt from 'bcrypt';

const saltRounds = 12;

export function hash(string) {
  if (!string || typeof string !== 'string') 
    throw new Error('Cannot hash, missing a string to hash');

  let result;
  try {
    const salt = bcrypt.genSaltSync(saltRounds);
    result = bcrypt.hashSync(string, salt);
  } catch (error) {
    console.log('[bcrypt] Error in hash()', error);
    // @ts-ignore
    throw new Error(error.message, {cause: error});
  }
  return result;
}

export function compare(string, reference) {
  if (!string || typeof string !== 'string') 
    throw new Error('Cannot compare hashes, missing a string to compare');
  if (!reference || typeof reference !== 'string') 
    throw new Error('Cannot compare hashes, missing a reference string');

  let result;
  try {
    result = bcrypt.compareSync(string, reference);
  } catch (error) {
    console.log('[bcrypt] Error in compare()', error);
    // @ts-ignore
    throw new Error(error.message, {cause: error});
  }
  return result;
}

const encryption = { hash, compare };

export default encryption;