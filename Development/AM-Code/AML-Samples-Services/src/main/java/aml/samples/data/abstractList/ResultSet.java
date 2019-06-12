package aml.samples.data.abstractList;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

public class ResultSet<T> implements Serializable {

    private List<T> data = new ArrayList<>();
    private int total = 0;

    public ResultSet() {
    }

    public List<T> getData() {
        return data;
    }

    public void setData(List<T> data) {
        this.data = data;
    }

    public int getTotal() {
        return total;
    }

    public void setTotal(int total) {
        this.total = total;
    }

    @Override
    public String toString() {
        return "ResultSet{" +
                "data=" + data +
                ", total=" + total +
                '}';
    }
}
