package co.edu.uco.deviucopay.entity;
import java.util.UUID;

import co.edu.uco.deviucopay.crosscutting.helpers.ObjectHelper;
import co.edu.uco.deviucopay.crosscutting.helpers.TextHelper;
import co.edu.uco.deviucopay.crosscutting.helpers.UUIDHelper;
import co.edu.uco.deviucopay.dto.TipoInstitucionDTO;


public final  class InstitucionEntity {
	
	private UUID id;
	private String nombre;		
	private String correo;
	private TipoInstitucionEntity tipoInstitucion;
	
	public InstitucionEntity() {
		setId(UUIDHelper.getDefault());
		setNombre(TextHelper.EMPTY);
		setCorreo(TextHelper.EMPTY);
		setTipoInstitucion(TipoInstitucionEntity.build());
	}
	
	public InstitucionEntity(final UUID id, final  String nombre, final String correo, final TipoInstitucionEntity tipoInstitucion) {		
		setId(id);
		setNombre(nombre);
		setCorreo(correo);
		setTipoInstitucion(tipoInstitucion);
		
	}
	
	public static final InstitucionEntity build() {
		return new InstitucionEntity();
	}
	
	public final InstitucionEntity setId( final UUID id) {
		this.id = UUIDHelper.getDefault(id, UUIDHelper.getDefault());
		return this;
	
	}
	
	public final InstitucionEntity setNombre(final String nombre) {
		this.nombre = TextHelper.applyTrim(nombre);
		return this;
	}

	public final InstitucionEntity setCorreo(String correo) {
		this.correo = TextHelper.applyTrim(correo);
		return this;
	}
	
	public final InstitucionEntity setTipoInstitucion(final TipoInstitucionEntity tipoInstitucion) {
		this.tipoInstitucion = ObjectHelper.getObjectHelper().getDefaultValue(tipoInstitucion, new TipoInstitucionEntity());
		return this;
	}
	
	public final TipoInstitucionEntity getTipoInstitucion() {
		return tipoInstitucion;
	}

	public String getCorreo() {
		return correo;
	}
	
	public final String getNombre() {
		return nombre;
	}
	public final UUID getId() {
		return id;
	}
}
