package co.edu.uco.deviucopay.business.domain;

import java.util.UUID;

import co.edu.uco.deviucopay.crosscutting.helpers.FloatHelper;
import co.edu.uco.deviucopay.crosscutting.helpers.ObjectHelper;
import co.edu.uco.deviucopay.crosscutting.helpers.TextHelper;
import co.edu.uco.deviucopay.crosscutting.helpers.UUIDHelper;

public class CuentaDomain {
	private UUID id;
    private String numeroCuenta;
    private String pin;
    private Float saldo;
    private AfiliadoDomain afiliado;
    private TipoCuentaDomain tipoCuenta;
    
    public CuentaDomain() {
		super();
	}

    private CuentaDomain(final UUID id, final String numeroCuenta, final String pin, final Float saldo, final AfiliadoDomain afiliado, final TipoCuentaDomain tipoCuenta) {
        setId(id);
    	setNumeroCuenta(numeroCuenta);
        setPin(pin);
        setSaldo(saldo);
        setAfiliado(afiliado);
        setTipoCuenta(tipoCuenta);
 
    }

    public static CuentaDomain build(final UUID id, String numeroCuenta, final String pin,final Float saldo, final AfiliadoDomain afiliado,
    		final TipoCuentaDomain tipoCuenta) {
        return new CuentaDomain(id, numeroCuenta, pin, saldo, afiliado, tipoCuenta);
    }
    public static CuentaDomain build(final UUID id) {
        return new CuentaDomain(id, TextHelper.EMPTY,TextHelper.EMPTY,FloatHelper.ZERO,
        		AfiliadoDomain.build(),TipoCuentaDomain.build());
    }

    public static CuentaDomain build() {
        return new CuentaDomain(UUIDHelper.getDefault(),TextHelper.EMPTY, TextHelper.EMPTY, FloatHelper.ZERO,
        		AfiliadoDomain.build(),TipoCuentaDomain.build());
    }
    
    private final void setId(UUID id) {
        this.id = UUIDHelper.getDefault(id, UUIDHelper.getDefault()); 
    }

    private final void setNumeroCuenta(String numeroCuenta) {
        this.numeroCuenta = TextHelper.applyTrim(numeroCuenta);
    }

    private final void setPin(String pin) {
        this.pin = TextHelper.applyTrim(pin);
    }

    private final void setSaldo(Float saldo) {
        this.saldo = FloatHelper.getDefaultValue(saldo);
    }

    private final void setAfiliado(AfiliadoDomain afiliado) {
        this.afiliado = ObjectHelper.getObjectHelper().getDefaultValue(afiliado, AfiliadoDomain.build());
    }

    private final void setTipoCuenta(TipoCuentaDomain tipoCuenta) {
        this.tipoCuenta = ObjectHelper.getObjectHelper().getDefaultValue(tipoCuenta, TipoCuentaDomain.build());
    }
    
    public UUID getId() {
        return id;
    }

    public String getNumeroCuenta() {
        return numeroCuenta;
    }

    public String getPin() {
        return pin;
    }

    public Float getSaldo() {
        return saldo;
    }

	public AfiliadoDomain getAfiliado() {
		return afiliado;
	}

	public TipoCuentaDomain getTipoCuenta() {
		return tipoCuenta;
	} 
}
