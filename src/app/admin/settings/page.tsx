import TopMenu from "@/components/admin/topMenu/topMenu";
import adminClasses from "@/app/admin/adminClasses.module.css";
import { db } from "@/db";
import EditMainTextForm from "@/components/admin/settings/mainImage/edit/editMainTextForm";
import EditPricesForm from "@/components/admin/settings/prices/editPricesForm";

export default async function SettingsPage() {
  let data;

  let mainText = "";
  let oneConsultationPrice = "";
  let fiveConsultationsPrice = "";

  try {
    data = await db.settings.findMany({
      where: {
        OR: [
          { field: "mainText" },
          { field: "oneConsultationPrice" },
          { field: "fiveConsultationsPrice" },
        ],
      },
    });
  } catch (err) {
    console.log(err);
    mainText = "Ошибка загрузки данных. Попробуйте позднее.";
    oneConsultationPrice = "Ошибка загрузки данных. Попробуйте позднее.";
    fiveConsultationsPrice = "Ошибка загрузки данных. Попробуйте позднее.";
  }

  if (data) {
    const mainTextObj = data.find((element) => element.field === "mainText");
    const oneConsultationPriceObj = data.find(
      (element) => element.field === "oneConsultationPrice"
    );
    const fiveConsultationsPriceObj = data.find(
      (element) => element.field === "fiveConsultationsPrice"
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
  }

  const prices = {
    oneConsultation: oneConsultationPrice,
    fiveConsultations: fiveConsultationsPrice,
  };

  return (
    <>
      <TopMenu page="settings" />

      <div className={`adminFormContainer articleForm`}>
        <h1>Главный текст</h1>
        <EditMainTextForm text={mainText} />
      </div>

      <div className={`adminFormContainer pricesForm`}>
        <h1>Цены</h1>
        <EditPricesForm prices={prices} />
      </div>
    </>
  );
}
