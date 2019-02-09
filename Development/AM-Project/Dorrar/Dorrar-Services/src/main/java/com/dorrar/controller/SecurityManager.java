package com.dorrar.controller;


import org.springframework.stereotype.Service;

import javax.crypto.Mac;
import javax.crypto.spec.SecretKeySpec;
import java.security.MessageDigest;
import java.util.Base64;



/**
 * Created by ahmed.motair on 9/26/2017.
 */
@Service
//TODO: Aya - This Should be in services folder
public class SecurityManager {

    // Generated at https://www.random.org/strings
    private final static String _salt = "rz8LuOtFBXphj9WQfvFh";
    private final static String SHA_256_ALGORITHM = "HmacSHA256";
    private final static String MD5_ALGORITHM = "MD5";

    public static String generateToken(String userName, String password, long ticks) throws Exception {
        Mac sha256_HMAC;
        sha256_HMAC = Mac.getInstance(SHA_256_ALGORITHM);

        String hash = String.join(":",new String[] {userName,String.valueOf(ticks)});
        byte[] hashedPassword = getHashedPassword(password);

        String result = "";
        if(hashedPassword != null) {
            SecretKeySpec secret_key = new SecretKeySpec(hashedPassword, SHA_256_ALGORITHM);
            sha256_HMAC.init(secret_key);
            String hashLeft = new String(Base64.getEncoder().encode(sha256_HMAC.doFinal(hash.getBytes())),"US-ASCII");
            String hashRight = String.join(":", new String[] { userName, String.valueOf(ticks) });
            result = new String(Base64.getEncoder().encode(String.join(":", new String[] { hashLeft, hashRight }).getBytes()),"US-ASCII");
        }
        return result;
    }

    public static byte[] getHashedPassword(String password) throws Exception{
        String key = String.join(":", new String[]{password, _salt});
        Mac sha256_HMAC;
            sha256_HMAC = Mac.getInstance(SHA_256_ALGORITHM);

        SecretKeySpec secret_key = new SecretKeySpec(_salt.getBytes(), SHA_256_ALGORITHM);
            sha256_HMAC.init(secret_key);

        byte[] hash = Base64.getEncoder().encode(sha256_HMAC.doFinal(key.getBytes()));

        return hash;
    }

    public String dm5Hash(String password) throws Exception{
        MessageDigest md = MessageDigest.getInstance(MD5_ALGORITHM);
        md.update(password.getBytes());
        byte byteData[] = md.digest();

        StringBuffer sb = new StringBuffer();
        for (int i = 0; i < byteData.length; i++)
            sb.append(Integer.toString((byteData[i] & 0xff) + 0x100, 16).substring(1));

        return sb.toString();
    }

}