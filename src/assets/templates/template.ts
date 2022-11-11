// import { appendFileSync, mkdirSync } from "fs";

// const args = process.argv.filter((value: string, index: number) => index && value);

// const run = (value: string) => {
//   const varSmall: string = value;
//   const varCapital: string = value.charAt(0).toUpperCase() + value.slice(1);
//   if (varSmall === undefined || varCapital === undefined || varSmall === '' || varCapital === '')
//     throw new Error("Invalid File name")
//   const datamodel = () => {
//     const datamodelsFolderPath = `src/datamodels/${varSmall}`;
//     const datamodelsFilePath = `src/datamodels/${varSmall}/${varCapital}.dto.ts`;
//     const datamodelsFileContent = `import { DTO } from "../dto";

// export class ${varCapital}DTO extends DTO {

// }`;

//     mkdirSync(datamodelsFolderPath, { recursive: true });
//     appendFileSync(datamodelsFilePath, datamodelsFileContent);
//   };
//   const model = () => {
//     const modelsFolderPath = `src/models/${varSmall}`;
//     const modelsFilePath = `src/models/${varSmall}/${varSmall}.ts`;
//     const modelsFileContent = `import { model, Schema, Document, Types } from "mongoose";

// import { DTOCreate } from "../../datamodels/dto";
// import { ${varCapital}DTO } from "../../datamodels/${varSmall}/${varCapital}.dto";

// type ID = Types.ObjectId


// export interface I${varCapital}Doc extends DTOCreate<${varCapital}DTO>, Document { }


// const schemaFields: Record<keyof DTOCreate<${varCapital}DTO>, any> = {

// };


// const schema = new Schema(schemaFields, { timestamps: true });

// export const ${varCapital}Model = model<I${varCapital}Doc>("${varCapital}", schema);`;

//     mkdirSync(modelsFolderPath, { recursive: true });
//     appendFileSync(modelsFilePath, modelsFileContent);
//   };
//   const dao = () => {
//     const daoFolderPath = `src/dao/${varSmall}`;
//     const daoFilePath = `src/dao/${varSmall}/${varSmall}.ts`;
//     const daoFileContent = `import { MongoDAO } from "../MongoDAO";
// import { ${varCapital}DTO } from "../../datamodels/${varSmall}/${varCapital}.dto";
// import { ${varCapital}Model } from "../../models/${varSmall}/${varSmall}";

// import { ${varCapital}DAOI } from "./${varSmall}I";
// import { query } from "express";
// import { IPaginateResult } from "../pagination";

// export class ${varCapital}DAO extends MongoDAO<${varCapital}DTO> implements ${varCapital}DAOI {

// }

// export const ${varSmall}DAO = new ${varCapital}DAO(${varCapital}Model, new ${varCapital}DTO());

// export default ${varSmall}DAO;`;
//     const daoIFilePath = `src/dao/${varSmall}/${varSmall}I.ts`;
//     const daoIFileContent = `import {DAOI} from "../daoI";
// import {${varCapital}DTO} from "../../datamodels/${varSmall}/${varCapital}.dto";

// export type ${varCapital}DAOI = DAOI<${varCapital}DTO>`;

//     mkdirSync(daoFolderPath, { recursive: true });
//     appendFileSync(daoFilePath, daoFileContent);
//     appendFileSync(daoIFilePath, daoIFileContent);
//   };
//   const service = () => {
//     const servicesFolderPath = `src/services/${varSmall}`;
//     const servicesFilePath = `src/services/${varSmall}/${varSmall}.ts`;
//     const servicesFileContent = `import { ServiceCRUD } from "../service.crud";
// import { ${varCapital}DAOI } from "../../dao/${varSmall}/${varSmall}I";
// import { ${varSmall}DAO } from "../../dao/${varSmall}/${varSmall}";
// import { ${varCapital}DTO } from "../../datamodels/${varSmall}/${varCapital}.dto";
// import { IPaginateResult } from "../../dao/pagination";

// class ${varCapital}Service extends ServiceCRUD<${varCapital}DTO, ${varCapital}DAOI> {



// }


// export const ${varSmall}Service = new ${varCapital}Service(${varSmall}DAO);
// export default ${varSmall}Service;`;

//     mkdirSync(servicesFolderPath, { recursive: true });
//     appendFileSync(servicesFilePath, servicesFileContent);
//   };
//   const apicontroller = () => {
//     const apicontrollersFolderPath = `src/apicontrollers/${varSmall}`;
//     const apicontrollersFilePath = `src/apicontrollers/${varSmall}/${varSmall}.ts`;
//     const apicontrollersFileContent = `import { Request, Response, NextFunction } from "express";
// import { check, sanitize, oneOf } from "express-valueidator";

// import { apiError, catchAsync, apiValueidation, apiOk, IQuery } from "../../util/apiHelpers";
// import { GetIdentity } from "../../config/auth";

// import { RouterClass } from "../resource/RouterClass";

// import { ResourceRouter } from "../resource/ResourceRouter";

// import { ${varSmall}Service } from "../../services/${varSmall}/${varSmall}";
// import { ${varCapital}DTO } from "../../datamodels/${varSmall}/${varCapital}.dto";

// import _ from "lodash";
// import cognitoService from "../../services/aws/cognito/cognito";

// const identity = GetIdentity();

// class ${varCapital}Router extends ResourceRouter<${varCapital}DTO> {

// }

// export const ${varSmall}Router = new ${varCapital}Router(new ${varCapital}DTO(), ${varSmall}Service);
// export default ${varSmall}Router;`;

//     mkdirSync(apicontrollersFolderPath, { recursive: true });
//     appendFileSync(
//       apicontrollersFilePath,
//       apicontrollersFileContent,
//     );
//   };
//   const script = () => {
//     datamodel();
//     model();
//     dao();
//     service();
//     apicontroller();
//   };
//   try {
//     script();
//   } catch (err) { script() }
// }
// args.forEach((value: string, index: number) => {
//   try {
//     run(value)
//   } catch (e) { run(value) }
// });