package aml.db;

import org.springframework.stereotype.Service;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;

@Service
public class DBService {
    private String SQL_DATE_FORMAT = "'yyyy-MM-dd'";

    public String constructWhere(List<String> conditions, boolean addWhereStatement, boolean addAndBefore){
        StringBuilder whereStatment = new StringBuilder();
        if(conditions.size() != 0) {
            if (addWhereStatement)
                whereStatment.append("WHERE ");
            else if (addAndBefore)
                whereStatment.append("AND ");

            whereStatment.append(conditions.get(0));
            for(int i=1; i<conditions.size(); i++)
                whereStatment.append(" AND ").append(conditions.get(0));
        }

        return whereStatment.toString();
    }

    public <T> List<String> addCondition(List<String> conditions, String colName, String operator, T value, Class<T> tClass){
        if(value != null){
            String condition = colName + " " + operator + " ";
            if(tClass == Boolean.class)
                condition += (Boolean) value ? "1" : "0";
            else
                condition += value;
            conditions.add(condition);

        }
        return conditions;
    }

    public List<String> addDateCondition(List<String> conditions, String colName, String from, String to){
        String fromStr = "", toStr = "";

        if(from != null)
            fromStr = "to_date(" + from + ", " + SQL_DATE_FORMAT + ")";
        if(to != null)
            toStr = "to_date(" + to + ", " + SQL_DATE_FORMAT + ")";

        if(from != null && to != null)
            conditions.add(colName + "BETWEEN " + fromStr + " AND " + toStr);
        else if (from != null)
            conditions.add(colName + " <= " + fromStr);
        else if (to != null)
            conditions.add(colName + " >= " + toStr);

        return conditions;
    }

    public List<String> addDateCondition(List<String> conditions, String colName, Date from, Date to){
        SimpleDateFormat formatter = new SimpleDateFormat("yyyy-MM-dd");

        if(from != null && to != null)
            conditions = this.addDateCondition(conditions, colName, formatter.format(from), formatter.format(to));
        if(from != null)
            conditions = this.addDateCondition(conditions, colName, formatter.format(from), null);
        if(to != null)
            conditions = this.addDateCondition(conditions, colName, null, formatter.format(to));

        return conditions;
    }

    public boolean toBoolean(String bitValue){
        return (bitValue.equals("1"));
    }
    public boolean toBoolean(int bitValue){
        return (bitValue == 1);
    }
}
