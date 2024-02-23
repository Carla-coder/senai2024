import {
    StyleShhet,
    text,
    View,
    TextInput,
    Dimensions,
    TouchableOpacity
}
    from 'react-native';

import react from 'react';
import MaskInput from 'react-native-mask-input';

// Pegar dimensão da tela
const { width, height } = Dimensions.get('screen');

const user = {
    username: 'user',
    password: '123456'
}

export default function loginForm (navigation) {
    const [username, setUsername = React.useState('user')];
    const [pass, setPass = React.useState('123456')];
}

    const validaUsuario = () => {
        if (pass === user.pass && username === user.username) {
            navigation.navigate('telaIMC', { name: 'telaIMC' });
        } else {
            alert('Usuário ou senha inválidos');
        }
    };

        return (
            <View style={StyleSheet.container}>
                <Text>Formulário de Cadastro</Text>
                <View style={StyleSheet.form}>
                    {/*USERNAME*/}
                    <MaskInput 
                    style = {StyleSheet.TextInput}
                    onChangeText={(masked, unmasked) => setUsername(masked)}
                    valuer={username}
                    placeholder="Digite seu usuário"
                    />
                    {/*PASSWORD*/}
                    <MaskInput
                        mask={() => [/\d/, /\d/, /\d/, /\d/, /\d/, /\d/]}
                        style={StyleSheet.textInput}
                        onChangeText={(masked, unmasked) => setPass(masked)}
                        value={pass}
                        placeholder="Digite sua senha"
                        keyboardType='numeric'
                    />
                    <TouchableOpacity 
                    onPress={validaUsuario}>

                    <Text>
                        Login
                    </Text>

                    </TouchableOpacity>
            </View>
        </View >
    );
}
