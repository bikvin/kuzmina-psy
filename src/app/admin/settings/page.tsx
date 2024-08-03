import TopMenu from "@/components/admin/topMenu/topMenu";
import adminClasses from "@/app/admin/adminClasses.module.css";
import { db } from "@/db";
import EditMainTextForm from "@/components/admin/settings/mainImage/edit/editMainTextForm";
import SettingsForm from "@/components/admin/settings/settings/settingsForm";

export default async function SettingsPage() {
  let data;

  let mainText = "";
  let oneConsultationPrice = "";
  let fiveConsultationsPrice = "";
  let notificationsEmail = "";

  try {
    data = await db.settings.findMany({
      where: {
        OR: [
          { field: "mainText" },
          { field: "oneConsultationPrice" },
          { field: "fiveConsultationsPrice" },
          { field: "notificationsEmail" },
        ],
      },
    });
  } catch (err) {
    console.log(err);
    mainText = "Ошибка загрузки данных. Попробуйте позднее.";
    oneConsultationPrice = "Ошибка загрузки данных. Попробуйте позднее.";
    fiveConsultationsPrice = "Ошибка загрузки данных. Попробуйте позднее.";
    notificationsEmail = "Ошибка загрузки данных. Попробуйте позднее.";
  }

  if (data) {
    const mainTextObj = data.find((element) => element.field === "mainText");
    const oneConsultationPriceObj = data.find(
      (element) => element.field === "oneConsultationPrice"
    );
    const fiveConsultationsPriceObj = data.find(
      (element) => element.field === "fiveConsultationsPrice"
    );

    const notificationsEmailObj = data.find(
      (element) => element.field === "notificationsEmail"
    );

    if (mainTextObj && mainTextObj.value) {
      mainText = mainTextObj.value;
    }
    if (oneConsultationPriceObj && oneConsultationPriceObj.value) {
      oneConsultationPrice = oneConsultationPriceObj.value;
    }
    if (fiveConsultationsPriceObj && fiveConsultationsPriceObj.value) {
      fiveConsultationsPrice = fiveConsultationsPriceObj.value;
    }

    if (notificationsEmailObj && notificationsEmailObj.value) {
      notificationsEmail = notificationsEmailObj.value;
    }
  }

  const settings = {
    oneConsultation: oneConsultationPrice,
    fiveConsultations: fiveConsultationsPrice,
    notificationsEmail: notificationsEmail,
  };

  return (
    <>
      <TopMenu page="settings" />

      <div className={`adminFormContainer articleForm`}>
        <h1>Главный текст</h1>
        <EditMainTextForm text={mainText} />
      </div>

      <div className={`adminFormContainer pricesForm`}>
        <h1>Настройки</h1>
        <SettingsForm settings={settings} />
      </div>
    </>
  );
}
