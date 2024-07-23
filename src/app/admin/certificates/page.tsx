import TopMenu from "@/components/admin/topMenu/topMenu";
import classes from "./certificatesAdmin.module.css";
import EditCertificatesForm from "@/components/admin/certificates/edit/editCertificatesForm";
import { db } from "@/db";

export default async function CertificatesEditPage() {
  const certificates = await db.certificate.findUnique({ where: { id: 1 } });

  let arrString = "[]"; // if no certificates set it to empty array
  if (certificates) {
    arrString = certificates.fileNamesArr;
  }

  const certificatesData = JSON.parse(arrString);

  return (
    <>
      <TopMenu page="certificates" />

      <div
        className={`adminFormContainer ${classes.certificatesADminFormContainer}`}
      >
        <h1>Дипломы и сертификаты</h1>
        <EditCertificatesForm certificatesData={certificatesData} />
      </div>
    </>
  );
}
