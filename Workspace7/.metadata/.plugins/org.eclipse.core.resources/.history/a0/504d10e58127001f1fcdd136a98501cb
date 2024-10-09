package co.edu.uco.deviucopay.business.assembler.dto.impl;

import static co.edu.uco.deviucopay.crosscutting.helpers.ObjectHelper.getObjectHelper;

import java.util.ArrayList;
import java.util.List;
import co.edu.uco.deviucopay.business.assembler.dto.AssemblerDTO;
import co.edu.uco.deviucopay.business.domain.TipoInstitucionDomain;
import co.edu.uco.deviucopay.crosscutting.helpers.ObjectHelper;
import co.edu.uco.deviucopay.dto.TipoInstitucionDTO;

public class TipoInstitucionAssemblerDTO implements AssemblerDTO<TipoInstitucionDomain, TipoInstitucionDTO> {

	private static final AssemblerDTO<TipoInstitucionDomain, TipoInstitucionDTO> instance = new TipoInstitucionAssemblerDTO();

	private TipoInstitucionAssemblerDTO() {
		super();
	}

	public static final AssemblerDTO<TipoInstitucionDomain, TipoInstitucionDTO> getInstance() {
		return instance;
	}

	@Override
	public TipoInstitucionDomain toDomain(TipoInstitucionDTO data) {
		var tipoInstitucionDtoTmp = ObjectHelper.getObjectHelper().getDefaultValue(data, TipoInstitucionDTO.build());
		return TipoInstitucionDomain.build(tipoInstitucionDtoTmp.getId(), tipoInstitucionDtoTmp.getNombre());
	}

	@Override
	public List<TipoInstitucionDomain> toDomainCollection(List<TipoInstitucionDTO> dtoCollection) {
		var dtoCollectionTmp = ObjectHelper.getObjectHelper().getDefaultValue(dtoCollection,
				new ArrayList<TipoInstitucionDTO>());
		return dtoCollectionTmp.stream().map(this::toDomain).toList();
	}

	@Override
	public List<TipoInstitucionDTO> toDTOCollection(List<TipoInstitucionDomain> domainCollection) {
		var domainCollectionTmp = ObjectHelper.getObjectHelper().getDefaultValue(domainCollection,
				new ArrayList<TipoInstitucionDomain>());
		return domainCollectionTmp.stream().map(this::toDTO).toList();
	}

	@Override
	public TipoInstitucionDTO toDTO(TipoInstitucionDomain domain) {
		var tipoInstitucionDomainTmp = ObjectHelper.getObjectHelper().getDefaultValue(domain, TipoInstitucionDomain.build());
		return TipoInstitucionDTO.build().setId(tipoInstitucionDomainTmp.getId()).setNombre(tipoInstitucionDomainTmp.getNombre());
	}

}