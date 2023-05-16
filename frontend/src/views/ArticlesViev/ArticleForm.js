import { Form, NavLink, useNavigation } from 'react-router-dom';
import Button from "../../components/form/Button/Button";
import Input from "../../components/form/Input/Input";
import Textarea from "../../components/form/Textarea/Textarea";

const ArticleForm = ({title, content, required, action}) => {

    const navigate = useNavigation();

    return <>
         <Form method='post'>
            <Input 
                id={'title'}
                name={'title'}
                type={'text'}
                labelText={'Title'}
                defaultValue={title}
                required={required}
            />

            <Textarea
                id={'content'}
                name={'content'}
                labelText={'Content'}
                defaultValue={content}
                required={required}
            />

            <Button>{action == "edit" ? "Save" : "Add"}</Button>
            <NavLink className="btn ms-2" to="..">Back</NavLink>
        </Form>
    </>
}

export default ArticleForm; 