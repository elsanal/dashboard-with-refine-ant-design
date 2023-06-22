import { file2Base64 } from "@refinedev/core";
import { FormProps } from "antd";
import { v4 as uuidv4 } from "uuid";

export const ImageToBase64 = async (values:{}, formProps:FormProps< {}>, isCreate:Boolean) => {
    const base64Files = [];
    // @ts-ignore
    const { image } = values;
    const createdate = Date.now();
    const updatedate = Date.now();

    for (const file of image) {
        if (file.originFileObj) {
            if(file.base64String){
                base64Files.push(file);
            }else{
                const base64String = await file2Base64(file);
                base64Files.push({
                    ...file,
                    base64String,
                });
            }

        } else {
            base64Files.push(file);
        }
    }

    return isCreate===true?(
        formProps.onFinish &&
        formProps.onFinish({
            ...values,
            id:uuidv4(),
            image: base64Files,
            createdate: createdate,
            updatedate: updatedate
        })
    ):(
        formProps.onFinish &&
        formProps.onFinish({
            ...values,
            image: base64Files,
            updatedate: updatedate
        })
    );
}
