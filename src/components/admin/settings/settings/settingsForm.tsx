"use client";
import { useFormState } from "react-dom";
import FormButton from "@/components/common/formButton";
import * as actions from "@/actions/settings/settings/edit";
import classes from "./settingsForm.module.css";

export default function SettingsForm({
  settings,
}: {
  settings: {
    oneConsultation: string;
    fiveConsultations: string;
    notificationsEmail: string;
  };
}) {
  const [formState, action] = useFormState(actions.editPrices, {});

  let successMessage = null;
  if (formState.success) {
    successMessage = formState.success.message;
  }

  return (
    <form className={`adminForm ${classes.settingsForm}`} action={action}>
      <h4>Цены:</h4>
      <div>
        <label htmlFor="oneConsultation">Цена за 1 консультацию</label>
        <input
          name="oneConsultation"
          type="text"
          defaultValue={settings.oneConsultation}
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
          defaultValue={settings.fiveConsultations}
        ></input>
        {formState.errors && (
          <div className="error">
            {formState.errors?.fiveConsultations?.join(", ")}
          </div>
        )}
      </div>

      <h4>Email:</h4>
      <div>
        <label htmlFor="notificationsEmail">Почта для уведомлений</label>
        <input
          name="notificationsEmail"
          type="text"
          defaultValue={settings.notificationsEmail}
        ></input>
        {/* {formState.errors && (
          <div className="error">
            {formState.errors?.notificationsEmail?.join(", ")}
          </div>
        )} */}
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
