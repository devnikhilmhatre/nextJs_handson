import { withRouter } from 'next/router';
import EditBrand from '../../components/brand/edit';

const Edit = withRouter((props) => (
    <React.Fragment>
        <EditBrand id={props.router.query.id} />
        <p>{props.router.query.id}</p>
    </React.Fragment>
));

export default Edit;