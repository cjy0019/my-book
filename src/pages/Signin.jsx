import Signin from '../components/Signin';
import withToken from '../hocs/withToken';
import { Redirect } from 'react-router-dom';

function SinginPage(props) {
  const { token } = props;

  if (token !== null) {
    return <Redirect to='/' />;
  }
  return <Signin />;
}
export default withToken(SinginPage);
