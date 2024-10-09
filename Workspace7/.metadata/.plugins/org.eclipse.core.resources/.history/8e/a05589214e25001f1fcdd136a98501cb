package co.edu.uco.deviucopay.business.facade.impl.tipoCuenta;
import java.util.List;
import co.edu.uco.deviucopay.business.assembler.dto.impl.TipoCuentaAssemblerDTO;
import co.edu.uco.deviucopay.business.facade.FacadeWithReturn;
import co.edu.uco.deviucopay.business.usecase.impl.tipoCuenta.ConsultarTipoCuentas;
import co.edu.uco.deviucopay.crosscutting.exceptions.DeviUcopayException;
import co.edu.uco.deviucopay.crosscutting.exceptions.customs.BusinessDeviUcopayException;
import co.edu.uco.deviucopay.data.dao.factory.DAOFactory;
import co.edu.uco.deviucopay.dto.TipoCuentaDTO;

public class ConsultarTipoCuentaFacade implements FacadeWithReturn<TipoCuentaDTO, List<TipoCuentaDTO>> {

    private DAOFactory daoFactory;

    public ConsultarTipoCuentaFacade() {
        this.daoFactory = DAOFactory.getFactory();
    }

    @Override
    public List<TipoCuentaDTO> execute(TipoCuentaDTO dto) {
        try {
            var useCase = new ConsultarTipoCuentas(daoFactory);
            var tipoCuentaDomain = TipoCuentaAssemblerDTO.getInstance().toDomain(dto);
            var resultadosDomain = useCase.execute(tipoCuentaDomain);
            return TipoCuentaAssemblerDTO.getInstance().toDTOCollection(resultadosDomain);
        } catch (DeviUcopayException exception) {
            throw exception;
        } catch (Exception exception) {
            var mensajeUsuario = "Se ha presentado un problema al consultar la información de los tipos de Cuenta.";
            var mensajeTecnico = "Se ha presentado un problema INESPERADO tratando de consultar los tipos de Cuenta.";
            throw new BusinessDeviUcopayException(mensajeUsuario, mensajeTecnico, exception);
        } finally {
            daoFactory.cerrarConexion();
        }
    }
}