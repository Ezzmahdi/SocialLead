import { CognitoUserPool } from "amazon-cognito-identity-js";

const poolData = {
    UserPoolId: "eu-north-1_TeguCjhSZ",
    ClientId: "7ti70k5ms0bfnat7ipmrl4rkns"
}

export default new CognitoUserPool(poolData);