"use client";
import { useFormState } from "react-dom";
import FormButton from "@/components/common/formButton";

import { useState } from "react";
import * as actions from "@/actions/certificates/edit";
import DropzoneInput from "@/components/admin/certificates/dropzone/dropzoneInput";

interface Certificate {
  name: string;
  id: string;
}

export default function EditCertificatesForm({
  certificatesData,
}: {
  certificatesData: Certificate[];
}) {
  const [formState, action] = useFormState(actions.editCertificates, {
    errors: {},
  });

  // const [articleValue, setArticleValue] = useState(text);
  // const [fileName, setFileName] = useState<string>(imageFileName);

  const [arrString, setArrString] = useState(JSON.stringify(certificatesData));

  const updateArrString = (certificatesArray: Certificate[]) => {
    // console.log("updateArrString");
    // console.log("certificatesArray", certificatesArray);
    // setArrString(JSON.stringify(certificatesArray));
    setArrString((oldArrstring) => JSON.stringify(certificatesArray));
  };

  return (
    <form className={`adminForm`} action={action}>
      <div>
        {/* <label htmlFor="dropzone">Картинка для обложки</label> */}
        <DropzoneInput
          dbSavedFileNames={certificatesData}
          updateArrString={updateArrString}
        />
        {/* {formState.errors && (
          <div className="error">
            {formState.errors?.imageFileName?.join(", ")}
          </div>
        )} */}
      </div>

      <FormButton>Сохранить</FormButton>
      {/* <input type="hidden" name="text" value={articleValue} />
      <input type="hidden" name="id" value={id} /> */}
      <input type="hidden" name="certificatesArr" value={arrString} />
    </form>
  );
}
