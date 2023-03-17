import { connect, set, connection, disconnect } from "mongoose";

export class DBConnection{
    public static connection = async() : Promise<boolean> => {
        await connect('mongodb://127.0.0.1:27017/categories');

        let isConnection = true;

        connection.on('error', (error) => {
            isConnection = false;
            console.log('error the connection', error);
        });

        return isConnection;
    }

    public static disconnect = async() : Promise<boolean> => {
        try {
            await disconnect();
            return true;
        } catch (error) {
            console.log('errot in disconnect db', error);
            return false;
        }
    }
}