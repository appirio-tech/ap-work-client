'use strict'

require('./auth.module.js')

import includes from 'lodash/includes'
import merge from 'lodash/merge'
// TODO: Move registration to accounts.topcoder.com
import { registerUser} from 'tc-accounts/core/auth.js'
import { decodeToken, getFreshToken, logout as doLogout } from 'tc-accounts'

let currentUser = null

export function loadUser() {
  function loadUserSuccess(token) {
    const decodedToken = decodeToken( token )

    if (decodedToken.userId) {
      currentUser = decodedToken
      currentUser.id = currentUser.userId
      currentUser.role = 'customer'

      if (includes(decodedToken.roles, 'Connect Copilot')) {
        currentUser.role = 'copilot'
      }

      if (includes(decodedToken.roles, 'Connect Support')) {
        currentUser.role = 'admin'
      }
    }

    return currentUser
  }

  return getFreshToken().then(loadUserSuccess)
}

export function getCurrentUser() {
  return currentUser
}

export function createUser(body) {
  return registerUser(body)
}

export function logout() {
  return doLogout().then( () => currentUser = null )
}

const UserV3Service = function() {
  return {
    getCurrentUser: getCurrentUser,
    createUser: createUser,
    loadUser: loadUser
  }
}

angular.module('appirio-tech-ng-auth').factory('UserV3Service', UserV3Service)