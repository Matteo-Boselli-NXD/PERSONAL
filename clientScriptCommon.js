/**
 * @NApiVersion 2.1
 * @NScriptType ClientScript
 * @NModuleScope SameAccount
 */
define([], () => {
  const MODULES = [];

  const fieldChanged = (scriptContext) => {
    for (let module of MODULES) {
      if (module.fieldChanged) {
        module.fieldChanged(scriptContext);
      }
    }
  };
  const lineInit = (scriptContext) => {
    for (let module of MODULES) {
      if (module.lineInit) {
        module.lineInit(scriptContext);
      }
    }
  };
  const pageInit = (scriptContext) => {
    for (let module of MODULES) {
      if (module.pageInit) {
        module.pageInit(scriptContext);
      }
    }
  };
  const postSourcing = (scriptContext) => {
    for (let module of MODULES) {
      if (module.postSourcing) {
        module.postSourcing(scriptContext);
      }
    }
  };
  const saveRecord = (scriptContext) => {
    for (let module of MODULES) {
      if (module.saveRecord) {
        module.saveRecord(scriptContext);
      }
    }
  };
  const sublistChanged = (scriptContext) => {
    for (let module of MODULES) {
      if (module.sublistChanged) {
        module.sublistChanged(scriptContext);
      }
    }
  };
  const validateDelete = (scriptContext) => {
    for (let module of MODULES) {
      if (module.validateDelete) {
        module.validateDelete(scriptContext);
      }
    }
  };
  const validateField = (scriptContext) => {
    for (let module of MODULES) {
      if (module.validateField) {
        module.validateField(scriptContext);
      }
    }
  };
  const validateInsert = (scriptContext) => {
    for (let module of MODULES) {
      if (module.validateInsert) {
        module.validateInsert(scriptContext);
      }
    }
  };
  const validateLine = (scriptContext) => {
    for (let module of MODULES) {
      if (module.validateLine) {
        module.validateLine(scriptContext);
      }
    }
  };
  const localizationContextEnter = (scriptContext) => {
    for (let module of MODULES) {
      if (module.localizationContextEnter) {
        module.localizationContextEnter(scriptContext);
      }
    }
  };
  const localizationContextExit = (scriptContext) => {
    for (let module of MODULES) {
      if (module.localizationContextExit) {
        module.localizationContextExit(scriptContext);
      }
    }
  };

  return {
    fieldChanged,
    lineInit,
    pageInit,
    postSourcing,
    saveRecord,
    sublistChanged,
    validateDelete,
    validateField,
    validateInsert,
    validateLine,
    localizationContextEnter,
    localizationContextExit,
  };
});
