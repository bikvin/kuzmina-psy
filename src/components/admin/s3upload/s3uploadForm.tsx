import classes from "./s3UloadForm.module.css";
import { uploadFile } from "@/actions/s3Upload";
import { useFormState } from "react-dom";
import FormButton from "@/components/common/formButton";

const initialState = { status: null, message: null };

function S3UploadForm() {
  const [state, formAction] = useFormState(uploadFile, initialState);

  return (
    <div>
      <form action={formAction}>
        <input type="file" id="file" name="file" accept="images/*" />
        <FormButton>Upload File</FormButton>
      </form>
      {state?.status && (
        <div className={`${classes["state-message"]} ${classes[state.status]}`}>
          {state?.message}
        </div>
      )}
    </div>
  );
}

export default S3UploadForm;
