import Pocketbase from 'pocketbase';
import Cookies from 'js-cookie';

export async function UserAuth () {
    const pb = new PocketBase('http://127.0.0.1:8090');
    const token = Cookies.get('token');

    if (!token) {
        return {
            body: {
                code: 400,
                message: 'No token found',
            },
        };
    }

    const res = await pb.collection('users').confirmVerification(token);

    return {
        
    };
}