import { templateI, templateInputI } from "./templateI";

export const daoTemplate = ({ varSmall, varCapital }: templateInputI): templateI => {
  const folderPath = `src/dao/${varSmall}`;
  const filePath = `src/dao/${varSmall}/${varSmall}.ts`;
  const fileContent = `import { MongoDAO } from "../MongoDAO";
import { ${varCapital}DTO } from "../../datamodels/${varSmall}/${varCapital}.dto";
import { ${varCapital}Model } from "../../models/${varSmall}/${varSmall}";

import { ${varCapital}DAOI } from "./${varSmall}I";
import { query } from "express";
import { IPaginateResult } from "../pagination";

export class ${varCapital}DAO extends MongoDAO<${varCapital}DTO> implements ${varCapital}DAOI {

}

export const ${varSmall}DAO = new ${varCapital}DAO(${varCapital}Model, new ${varCapital}DTO());

export default ${varSmall}DAO;`;


  const fileIPath = `src/dao/${varSmall}/${varSmall}I.ts`;
  const fileIContent = `import {DAOI} from "../daoI";
import {${varCapital}DTO} from "../../datamodels/${varSmall}/${varCapital}.dto";

export type ${varCapital}DAOI = DAOI<${varCapital}DTO>`;


  return {
    folderPath,
    filePath,
    fileContent,
    fileIPath,
    fileIContent
  }
};