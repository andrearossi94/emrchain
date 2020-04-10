import { appConstants as c } from '@convector-sample/common';
import { ConvectorModel, Default, ReadOnly, Required, Validate, FlatConvectorModel } from '@worldsibu/convector-core';
import * as yup from 'yup';
import { Personale } from 'personale-cc';


export class Cartellaclinica extends ConvectorModel<Cartellaclinica> {
  @ReadOnly()
  @Required()
  public readonly type = c.CONVECTOR_MODEL_PATH_CARTELLACLINICA;

  @Required()
  @Validate(yup.string())
  public pazienteID: string;

  @Required()
  @Validate(yup.string())
  public dottoreID: string;

  @Required()
  @Validate(yup.string())
  public patologia: string;

  @Required()
  @Validate(yup.boolean())
  public stato: boolean;

  @Required()
  @Validate(yup.boolean())
  public consenso: boolean;
}