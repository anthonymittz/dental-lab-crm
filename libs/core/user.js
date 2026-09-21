import useRepository from "@lib/core/repository.js";


export function createUser(data) {
  const repo = useRepository();
}

export function removeUser(id) {

}

export function updateUser(id, data) {

}

/**
 * @param {"id"|"name"|"email"|"phone"} key 
 * @param {string} value 
 */
function userExists(key, value) {
  return false;
}