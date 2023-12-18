package Test15.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Test15.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import com.sap.olingo.jpa.metadata.core.edm.annotation.EdmIgnore;
import java.util.Date;
import java.util.List;

/**
 * Entity implementation class for Entity: Заказы
 */
@Entity(name = "IISTest15Заказы")
@Table(schema = "public", name = "Заказы")
public class Zakazy {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "КодЗаказа")
    private Integer кодзаказа;

    @Column(name = "Статус")
    private String статус;

    @Column(name = "Дата")
    private Date дата;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Prodavec")
    @Convert("Prodavec")
    @Column(name = "Продавец", length = 16, unique = true, nullable = false)
    private UUID _prodavecid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Prodavec", insertable = false, updatable = false)
    private Prodavec prodavec;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Kontragent")
    @Convert("Kontragent")
    @Column(name = "Контрагент", length = 16, unique = true, nullable = false)
    private UUID _kontragentid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Kontragent", insertable = false, updatable = false)
    private Kontragent kontragent;

    @OneToMany(mappedBy = "zakazy", fetch = FetchType.LAZY, cascade = CascadeType.REMOVE)
    private List<SostavZakaza> sostavzakazas;


    public Zakazy() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public Integer getКодЗаказа() {
      return кодзаказа;
    }

    public void setКодЗаказа(Integer кодзаказа) {
      this.кодзаказа = кодзаказа;
    }

    public String getСтатус() {
      return статус;
    }

    public void setСтатус(String статус) {
      this.статус = статус;
    }

    public Date getДата() {
      return дата;
    }

    public void setДата(Date дата) {
      this.дата = дата;
    }


}