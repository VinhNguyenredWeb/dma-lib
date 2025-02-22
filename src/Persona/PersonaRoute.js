/*
 * @copyright   Copyright (C) 2022 AesirX. All rights reserved.
 * @license     GNU General Public License version 3, see LICENSE.
 */

import BaseRoute from '../Abstract/BaseRoute';
import AesirxApiInstance from '../gateway/Instance';

/**
 * Class PersonaRoute extends BaseRoute
 */
class PersonaRoute extends BaseRoute {
  /**
   * function getPersonaRequest get specified Persona Data from Aesir Redcore WS
   * @param  personaId
   * @return JSON
   */

  getPersonaRequest = (personaId) =>
    AesirxApiInstance().get(
      this.createRequestURL({
        option: 'persona',
        id: personaId,
      })
    );

  /**
   *
   * @param data
   */
  createPersonaRequest = (data) =>
    AesirxApiInstance().post(
      this.createRequestURL({
        option: 'persona',
      }),
      data
    );

  /**
   *
   * @param data
   */
  updatePersonaRequest = (data) =>
    AesirxApiInstance().put(
      this.createRequestURL({
        option: 'persona',
      }),
      data
    );

  /**
   *
   * @param personaId
   */

  deletePersonaRequest = (personaId) => {
    const ids = personaId.split(',');

    if (ids.length < 2) {
      return AesirxApiInstance().delete(
        this.createRequestURL({
          option: 'persona',
          id: personaId,
        })
      );
    } else {
      return AesirxApiInstance().post(
        this.createRequestURL({
          option: 'persona',
          task: 'deleteAll',
        }),
        {
          id: personaId,
        }
      );
    }
  };

  getPersonasRequest = (page = 1, limit = 20) =>
    AesirxApiInstance().get(
      this.createRequestURL({
        option: 'persona',
        'list[limitstart]': (page - 1) * limit,
        'list[limit]': limit,
      })
    );

  getPersonaMasterDataRequest = () => {
    return AesirxApiInstance().get(
      this.createRequestURL({
        option: 'persona',
        task: 'getMasterData',
      })
    );
  };

  getConnectedChannelByOrganisationIdRequest = (organisationId) => {
    return AesirxApiInstance().get(
      this.createRequestURL({
        option: 'persona',
        task: 'getConnectedChannelByOrganisationId',
        organisationId: organisationId,
      })
    );
  };

  /**
   * function getConnectedChannelByPersonaIdsRequest
   * @param  personaIds = '123, 456'
   * @return JSON
   */
  getConnectedChannelByPersonaIdsRequest = (personaIds) => {
    return AesirxApiInstance().get(
      this.createRequestURL({
        option: 'persona',
        task: 'getConnectedChannelByPersonaIds',
        persona_id: personaIds,
      })
    );
  };

  searchPersonasRequest = (dataFilter, page = 1, limit = 20) => {
    return AesirxApiInstance().get(
      this.createRequestURL({
        option: 'persona',
        task: 'filterPersona',
        limitStart: (page - 1) * limit,
        limit: limit,
        ...dataFilter,
      })
    );
  };

  getMemberInfoRequest = () => {
    return AesirxApiInstance().get(
      this.createRequestURL({
        option: 'persona',
        task: 'getMemberInfo',
      })
    );
  };
}

export default PersonaRoute;
