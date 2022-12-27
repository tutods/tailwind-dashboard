import 'styles/global.css';
import type {AppProps} from 'next/app'
import {DefaultLayout} from "components/ui/layouts/Default";

const App = ({Component, pageProps}: AppProps) => {
    return <DefaultLayout>
        <Component {...pageProps} />
    </DefaultLayout>
}

export default App