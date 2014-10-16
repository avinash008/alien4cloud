'use strict';

angular.module('alienUiApp').factory('topologyServices', ['$resource',
  function($resource) {
    // Service that gives access to create topology
    var topologyScalingPoliciesDAO = $resource('rest/topologies/:topologyId/scalingPolicies/:nodeTemplateName', {}, {});

    var topologyDAO = $resource('rest/topologies/:topologyId', {}, {
      'create': {
        method: 'POST'
      },
      'get': {
        method: 'GET'
      }
    });

    var addNodeTemplate = $resource('rest/topologies/:topologyId/nodetemplates/:nodeTemplateName', {}, {
      'add': {
        method: 'POST',
        isArray: false,
        headers: {
          'Content-Type': 'application/json; charset=UTF-8'
        }
      },
      'remove': {
        method: 'DELETE',
        isArray: false,
        headers: {
          'Content-Type': 'application/json; charset=UTF-8'
        }
      }
    });

    var updateInputProperty = $resource('rest/topologies/:topologyId/nodetemplates/:nodeTemplateName/property/:propertyName/isInput', {}, {
      'add': {
        method: 'POST',
        params: {
          topologyId: '@topologyId',
          nodeTemplateName: '@nodeTemplateName',
          propertyName: '@propertyName'
        },
        headers: {
          'Content-Type': 'application/json; charset=UTF-8'
        }
      },
      'remove': {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json; charset=UTF-8'
        }
      }
    });

    var updateOutputProperty = $resource('rest/topologies/:topologyId/nodetemplates/:nodeTemplateName/property/:propertyName/isOutput', {}, {
      'add': {
        method: 'POST',
        params: {
          topologyId: '@topologyId',
          nodeTemplateName: '@nodeTemplateName',
          propertyName: '@propertyName'
        },
        headers: {
          'Content-Type': 'application/json; charset=UTF-8'
        }
      },
      'remove': {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json; charset=UTF-8'
        }
      }
    });

    var updateInputArtifact = $resource('rest/topologies/:topologyId/nodetemplates/:nodeTemplateName/artifact/:artifactName', {}, {
      'add': {
        method: 'PUT',
        params: {
          topologyId: '@topologyId',
          nodeTemplateName: '@nodeTemplateName',
          artifactName: '@artifactName'
        },
        headers: {
          'Content-Type': 'application/json; charset=UTF-8'
        }
      },
      'remove': {
        method: 'DELETE',
        isArray: false,
        headers: {
          'Content-Type': 'application/json; charset=UTF-8'
        }
      }
    });

    var updateNodeTemplateName = $resource('rest/topologies/:topologyId/nodetemplates/:nodeTemplateName/updateName/:newName', {}, {
      'updateName': {
        method: 'PUT',
        params: {
          topologyId: '@topologyId',
          nodeTemplateName: '@nodeTemplateName',
          newName: '@newName'
        }
      }
    });

    var updateNodeProperty = $resource('rest/topologies/:topologyId/nodetemplates/:nodeTemplateName/properties', {}, {
      'update': {
        method: 'POST',
        isArray: false,
        headers: {
          'Content-Type': 'application/json; charset=UTF-8'
        }
      }
    });

    var relationshipDAO = $resource('rest/topologies/:topologyId/nodetemplates/:nodeTemplateName/relationships/:relationshipName', {}, {
      'add': {
        method: 'POST',
        isArray: false,
        headers: {
          'Content-Type': 'application/json; charset=UTF-8'
        }
      },
      'remove': {
        method: 'DELETE'
      }
    });

    var updateRelationshipName = $resource('rest/topologies/:topologyId/nodetemplates/:nodeTemplateName/relationships/:relationshipName/updateName', {}, {
      'updateName': {
        method: 'PUT',
        params: {
          topologyId: '@topologyId',
          nodeTemplateName: '@nodeTemplateName',
          relationshipName: '@relationshipName',
          newName: '@newName'
        }
      }
    });

    var isValid = $resource('rest/topologies/:topologyId/isvalid', {}, {
      method: 'GET'
    });

    var replacements = $resource('rest/topologies/:topologyId/nodetemplates/:nodeTemplateName/replace', {}, {
      'get': {
        method: 'GET'
      },
      'replace': {
        method: 'PUT',
        params: {
          topologyId: '@topologyId',
          nodeTemplateName: '@nodeTemplateName'
        },
        headers: {
          'Content-Type': 'application/json; charset=UTF-8'
        }
      }
    });

    var cloudResource = $resource('rest/applications/:applicationId/cloud', {}, {
      'set': {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json; charset=UTF-8'
        }
      }
    });

    var updateOutputAttribute = $resource('rest/topologies/:topologyId/nodetemplates/:nodeTemplateName/attributes/:attributeName/output', {}, {
      'add': {
        method: 'POST',
        params: {
          topologyId: '@topologyId',
          nodeTemplateName: '@nodeTemplateName',
          attributeName: '@attributeName'
        },
        headers: {
          'Content-Type': 'application/json; charset=UTF-8'
        }
      },
      'remove': {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json; charset=UTF-8'
        }
      }
    });

    return {
      'dao': topologyDAO,
      'nodeTemplate': {
        'add': addNodeTemplate.add,
        'remove': addNodeTemplate.remove,
        'updateName': updateNodeTemplateName.updateName,
        'updateProperty': updateNodeProperty.update,
        'getPossibleReplacements': replacements.get,
        'replace': replacements.replace,
        'inputProperties': updateInputProperty,
        'outputProperties': updateOutputProperty,
        'outputAttributes': updateOutputAttribute,
        'artifactInput': updateInputArtifact
      },
      'topologyScalingPoliciesDAO': topologyScalingPoliciesDAO,
      'relationshipDAO': relationshipDAO,
      'relationship':{
        'updateName':updateRelationshipName.updateName
      },
      'isValid': isValid.get,
      'cloud': cloudResource
    };
  }
]);