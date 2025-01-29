import React from 'react';
import { Layout, Image, Typography } from 'antd';
import Logo from './images/Instaverse.png';
import Home from './components/Home';
import styles from './styles';

// Destructuring to clean up the code
const { Title } = Typography;
const { Header, Footer } = Layout;

const App = () => {
    return (
        <Layout style={styles.layout}>
            <Header style={styles.header}>
                {/* Logo and Title */}
                <Image style={styles.image} preview={false} src={Logo} width={45} />
                &nbsp;
                <Title style={styles.title}>Momentify</Title>
            </Header>
            {/* Home Component */}
            <Home />
            <Footer style={styles.footer}>2025 Momentify</Footer>
        </Layout>
    );
}

export default App;