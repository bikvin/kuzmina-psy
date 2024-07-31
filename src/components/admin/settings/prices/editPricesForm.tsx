"use client";
import { useFormState } from "react-dom";
import FormButton from "@/components/common/formButton";
import * as actions from "@/actions/settings/prices/edit";
import classes from "./editPricesForm.module.css";

export default function EditPricesForm({
  prices,
}: {
  prices: { oneConsultation: string; fiveConsultations: string };
}) {
  const [formState, action] = useFormState(actions.editPrices, {});

  let successMessage = null;
  if (formState.success) {
    successMessage = formState.success.message;
  }

  return (
    <form className={`adminForm ${classes.editPricesForm}`} action={action}>
      <div>
        <label htmlFor="oneConsultation">Цена за 1 консультацию</label>
        <input
          name="oneConsultation"
          type="text"
          defaultValue={prices.oneConsultation}
        ></input>
        {formState.errors && (
          <div className="error">
            {formState.errors?.oneConsultation?.join(", ")}
          </div>
        )}
      </div>

      <div>
        <label htmlFor="fiveConsultations">Цена за 5 консультаций</label>
        <input
          name="fiveConsultations"
          type="text"
          defaultValue={prices.fiveConsultations}
        ></input>
        {formState.errors && (
          <div className="error">
            {formState.errors?.fiveConsultations?.join(", ")}
          </div>
        )}
      </div>

      {formState.errors && (
        <div className="error">{formState.errors?._form?.join(", ")}</div>
      )}

      <FormButton successMessage={successMessage} small={true}>
        Сохранить
      </FormButton>
    </form>
  );
}
