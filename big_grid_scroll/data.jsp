<%@ page contentType="text/html;charset=utf-8"  pageEncoding="utf-8" %>
<%@ page import="java.awt.*" %>
<%@ page import="java.awt.image.*" %>
<%@ page import="javax.imageio.*" %>
<%@ page import="javax.imageio.stream.*" %>
<%@ page import="java.io.*" %>
<%@ page import="javax.servlet.*" %>
<%@ page import="javax.servlet.http.*" %>
<%@ page import="org.json.simple.JSONObject"%>
<%@ page import="org.json.simple.JSONArray" %>
<%@ page import="org.json.simple.parser.*" %>
<%@ page import="java.util.Iterator" %>
<%
    JSONObject jsonReturn = new JSONObject();
    JSONObject jsonData = new JSONObject();
    String strMsg ="";
    boolean bSuccess = false; 
    long totalListSize = 100000;
    JSONArray jsonArray =new JSONArray();
    for(long i=0; i < totalListSize; i++){
        JSONObject json = new JSONObject();
        json.put("column1", i);
        json.put("column2", "홍길동");
        json.put("column3", "경기도");
        json.put("column4", "파주시");
        json.put("column5", "금촌동");
        json.put("column6", "후곡마을");
        json.put("column7", "1900동");
        jsonArray.add(json);
    }
    jsonData.put("totalListSize", totalListSize);
    jsonData.put("list", jsonArray);
    bSuccess = true;

    jsonReturn.put("success", bSuccess);
    jsonReturn.put("data", jsonData);
    jsonReturn.put("msg", strMsg);

    out.println(jsonReturn.toString());
%>

