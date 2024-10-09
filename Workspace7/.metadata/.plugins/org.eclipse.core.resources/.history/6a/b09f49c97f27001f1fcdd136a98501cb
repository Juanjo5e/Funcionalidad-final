package co.edu.uco.deviucopay.business.assembler.dto.impl;

import static co.edu.uco.deviucopay.crosscutting.helpers.ObjectHelper.getObjectHelper;

import java.util.List;
import java.util.ArrayList;
import co.edu.uco.deviucopay.business.assembler.dto.AssemblerDTO;
import co.edu.uco.deviucopay.business.domain.InstitucionDomain;
import co.edu.uco.deviucopay.business.domain.TipoInstitucionDomain;
import co.edu.uco.deviucopay.dto.InstitucionDTO;
import co.edu.uco.deviucopay.dto.TipoInstitucionDTO;
import co.edu.uco.deviucopay.crosscutting.helpers.ObjectHelper;

public class InstitucionAssemblerDTO implements AssemblerDTO<InstitucionDomain, InstitucionDTO> {
	private static final AssemblerDTO<TipoInstitucionDomain,TipoInstitucionDTO> tipoInstitucionAssembler= TipoInstitucionAssemblerDTO.getInstance();
	private static final AssemblerDTO<InstitucionDomain, InstitucionDTO>  instance = new InstitucionAssemblerDTO();
	
	
	private InstitucionAssemblerDTO() {
		super();
	}
	
	public static final AssemblerDTO<InstitucionDomain, InstitucionDTO> getInstance(){
		return instance;
	}
	@Override
	public final InstitucionDomain toDomain(final InstitucionDTO data) {
		var institucionDtoTmp=getObjectHelper().getDefaultValue(data, InstitucionDTO.build());
		var tipoInstitucionDomain = tipoInstitucionAssembler.toDomain(institucionDtoTmp.getTipoInstitucion());
		return InstitucionDomain.build(institucionDtoTmp.getId(),institucionDtoTmp.getNombre(),institucionDtoTmp.getCorreo(),tipoInstitucionDomain);
	}

	@Override
	public final InstitucionDTO toDTO(final InstitucionDomain domain) {
		var institucionDomainTmp = getObjectHelper().getDefaultValue(domain, InstitucionDomain.build());
		var tipoInstitucionDto = tipoInstitucionAssembler.toDTO(institucionDomainTmp.getTipoInstitucion());
		return InstitucionDTO.build().setId(institucionDomainTmp.getId()).setNombre(institucionDomainTmp.getNombre());
	}

	@Override
	public List<InstitucionDomain> toDomainCollection(List<InstitucionDTO> dtoCollection) {
		var dtoCollectionTmp = ObjectHelper.getObjectHelper().getDefaultValue(dtoCollection,
				new ArrayList<InstitucionDTO>());
		return dtoCollectionTmp.stream().map(this::toDomain).toList();
	}

	@Override
	public List<InstitucionDTO> toDTOCollection(List<InstitucionDomain> domainCollection) {
		var domainCollectionTmp = ObjectHelper.getObjectHelper().getDefaultValue(domainCollection,
				new ArrayList<InstitucionDomain>());
		return domainCollectionTmp.stream().map(this::toDTO).toList();
	}

}