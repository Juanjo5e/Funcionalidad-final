package co.edu.uco.deviucopay.business.facade.impl.cuenta;

import java.util.List;



import co.edu.uco.deviucopay.business.assembler.dto.impl.CuentaAssemblerDTO;
import co.edu.uco.deviucopay.business.facade.FacadeWithReturn;
import co.edu.uco.deviucopay.business.usecase.impl.cuenta.ConsultarCuentas;
import co.edu.uco.deviucopay.crosscutting.exceptions.DeviUcopayException;
import co.edu.uco.deviucopay.crosscutting.exceptions.customs.BusinessDeviUcopayException;
import co.edu.uco.deviucopay.dto.CuentaDTO;
import co.edu.uco.deviucopay.data.dao.factory.DAOFactory;

public class ConsultarCuentaFacade implements FacadeWithReturn<CuentaDTO, List<CuentaDTO>> {

	private DAOFactory daoFactory;

	public ConsultarCuentaFacade() {
		daoFactory = DAOFactory.getFactory();
	}

	@Override
	public List<CuentaDTO> execute(final CuentaDTO dto) {

		try {
			var usecase = new ConsultarCuentas(daoFactory);
			var cuentaDomain = CuentaAssemblerDTO.getInstance().toDomain(dto);
			var resultadosDomain = usecase.execute(cuentaDomain);
			return CuentaAssemblerDTO.getInstance().toDTOCollection(resultadosDomain);

		} catch (final DeviUcopayException exception) {
			throw exception;
		} catch (final Exception exception) {

			var mensajeUsuario = "Se ha presentado un problema consultar la informacion de las ciudad";
			var mensajeTecnico = "Se ha presentado un problema INESPERADO tratando de consultar la ciudad";

			throw new BusinessDeviUcopayException(mensajeTecnico, mensajeUsuario, exception);

		} finally {
			daoFactory.cerrarConexion();
		}
	}

}