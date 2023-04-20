let etapa1 = document.getElementById('etapa1')
let etapaGeral = document.getElementById('menuGeral')
let migração = document.getElementById('migração')
let acomp = document.getElementById('acomp')

let texto = document.getElementById('textoTeste')
let legenda = document.getElementById('legenda')
let etapa = document.getElementsByName('etapa')

let respCopy = document.getElementById('respCopy')

// Primeira Etapa
let dono = document.getElementById('dono');
let resp = document.getElementById('resp');
let quem = document.getElementById('quem');
let usuario = document.getElementById('usuario');
let empresas = document.getElementById('empresas');
let sistemaContabil = document.getElementById('sistemaContabil')
let jaUsaram = document.getElementById('jaUsaram');
let formas = document.getElementById('formas');
let maioriaRegimes = document.getElementById('maioriaRegimes');
let valor = document.getElementById('valor');
let ticket = document.getElementById('ticket')
let obs = document.getElementById('obs')

let resp1 = document.getElementById('etapa1resp1')
let resp2 = document.getElementById('etapa1resp2')
let resp3 = document.getElementById('etapa1resp3')
let resp4 = document.getElementById('etapa1resp4')
let resp5 = document.getElementById('etapa1resp5')
let resp6 = document.getElementById('etapa1resp6')
let resp7 = document.getElementById('etapa1resp7')
let resp8 = document.getElementById('etapa1resp8')
let resp9 = document.getElementById('etapa1resp9')
let resp10 = document.getElementById('etapa1resp10')
let resp11 = document.getElementById('etapa1resp11')
let resp12 = document.getElementById('etapa1resp12')

//Etapas Gerais
let horario = document.getElementsByName('horario')
let uso = document.getElementById('uso')
let participantes = document.getElementById('parcicipantes')
let atividades = document.getElementsByName('atividades')
let duvidas = document.getElementsByName('duvidas')
let participativos = document.getElementsByName('participativos')
let problema = document.getElementsByName('problema')
let nota = document.getElementsByName('nota')
let geralObs = document.getElementById('geralObs')
let comprometido = document.getElementById('comprometido')
let tecnologico = document.getElementById('tecnologico')
let etapaBackup = document.getElementById('etapaBackup')
let falta = document.getElementById('falta')
let ticketConsult = document.getElementById('ticketConsult')

let Gresp0 = document.getElementById('geralResp0')
let Gresp1 = document.getElementById('geralResp1')
let Gresp2 = document.getElementById('geralResp2')
let Gresp3 = document.getElementById('geralResp3')
let Gresp4 = document.getElementById('geralResp4')
let Gresp5 = document.getElementById('geralResp5')
let Gresp6 = document.getElementById('geralResp6')
let Gresp7 = document.getElementById('geralResp7')
let Gresp8 = document.getElementById('geralResp8')
let Gresp9 = document.getElementById('geralResp9')
let Gresp10 = document.getElementById('geralResp10')
let Gresp11 = document.getElementById('geralResp11')
let Gresp12 = document.getElementById('geralResp12')
let Gresp13 = document.getElementById('geralResp13')


//Migração

let valorMigra = document.getElementById('valorMigra')
let referenciaMigra = document.getElementById('referenciaMigra')
let formaContato = document.getElementById('formaContato')
let equipeEngajada = document.getElementById('equipeEngajada')
let dispensaMassa = document.getElementById('dispensaMassa')
let erp = document.getElementById('erp')
let smtp = document.getElementById('smtp')
let regUso = document.getElementById('regUso')
let acesso = document.getElementById('acesso')
let entregas = document.getElementById('entregas')
let robo = document.getElementById('robo')
let gestao = document.getElementById('gestao')
let app = document.getElementById('app')
let apla = document.getElementById('apla')
let ticketFinal = document.getElementById('ticketFinal')
let dispensaTicket = document.getElementById('dispensaTicket')
let Minfo = document.getElementById('Minfo')

let Mresp1 = document.getElementById('Mresp1')
let Mresp2 = document.getElementById('Mresp2')
let Mresp3 = document.getElementById('Mresp3')
let Mresp4 = document.getElementById('Mresp4')
let Mresp5 = document.getElementById('Mresp5')
let Mresp6 = document.getElementById('Mresp6')
let Mresp7 = document.getElementById('Mresp7')
let Mresp8 = document.getElementById('Mresp8')
let Mresp9 = document.getElementById('Mresp9')
let Mresp10 = document.getElementById('Mresp10')
let Mresp11 = document.getElementById('Mresp11')
let Mresp12 = document.getElementById('Mresp12')
let Mresp13 = document.getElementById('Mresp13')
let Mresp14 = document.getElementById('Mresp14')
let Mresp15 = document.getElementById('Mresp15')
let Mresp16 = document.getElementById('Mresp16')
let Mresp17 = document.getElementById('Mresp17')

//Acompanhamento

let contato = document.getElementById('contato')
let tratativa = document.getElementById('tratativa')
let ticketAcomp = document.getElementById('ticketAcomp')

let Aresp1 = document.getElementById('Aresp1')
let Aresp2 = document.getElementById('Aresp2')
let Aresp3 = document.getElementById('Aresp3')
let Aresp4 = document.getElementById('Aresp4')
let Aresp5 = document.getElementById('Aresp5')


let comprometido2 = document.getElementById('comprometido2')
let tecnologico2 = document.getElementById('tecnologico2')
let etapaBackup2 = document.getElementById('etapaBackup2')

let Aresp7 = document.getElementById('Aresp7')
let Aresp8 = document.getElementById('Aresp8')
let Aresp9 = document.getElementById('Aresp9')
let Aresp10 = document.getElementById('Aresp10')

// Backup

let radioBackup = document.getElementsByName('btnBackup')
let telaBackup = document.getElementById('telaBackup')

// Backup2

let radioBackup2 = document.getElementsByName('btnBackup2')
let telaBackup2 = document.getElementById('telaBackup2')


function confIni(){
    etapa1.style.display= "block";
    menuGeral.style.display = "none"
    migração.style.display = "none"
    acomp.style.display = "none"
}

function geral(){
    menuGeral.style.display = "block"
    etapa1.style.display = "none"
    migração.style.display = "none"
    acomp.style.display = "none"
}

function migra(){
    migração.style.display = "block"
    menuGeral.style.display = "none"
    etapa1.style.display = "none"
    acomp.style.display = "none"
}

function acpt(){
    acomp.style.display = "block"
    menuGeral.style.display = "none"
    etapa1.style.display = "none"
    migração.style.display = "none"
}

function teste() { 
    resp1.innerHTML = " ** Check in primeira etapa ** " + "<br><br>" + "- Dono do escritório : " + dono.value
    resp2.innerHTML = "- Responsavel Técnico : " + resp.value
    resp3.innerHTML = "- Quem participou da consultoria : " + quem.value
    resp4.innerHTML = "- Usuários aprox: " + usuario.value
    resp5.innerHTML = "- Empresas aprox: " + empresas.value
    resp6.innerHTML = "- Sistema Contábil: " + sistemaContabil.value
    resp7.innerHTML = "- Ja usaram sistema de gestão: " + jaUsaram.value
    resp8.innerHTML = "- Forma de entrega:(se recebem por email wpp ou físico): " + formas.value
    resp9.innerHTML = "- Qual a maioria dos regimes tributários: " + maioriaRegimes.value
    resp10.innerHTML = "- Valor da Acessórias mais chamou atenção: " + valor.value
    resp11.innerHTML = "- TicketApp: " + ticket.value
    resp12.innerText = "- Informações Adicionais: " + obs.value

    respCopy.innerHTML = resp1.innerText + "\n" + resp2.innerText + "\n" 
    + resp3.innerText + "\n"
    + resp4.innerText + "\n"
    + resp5.innerText + "\n"
    + resp6.innerText + "\n"
    + resp7.innerText + "\n"
    + resp8.innerText + "\n"
    + resp9.innerText + "\n"
    + resp10.innerText + "\n"
    + resp11.innerText + "\n"
    + resp12.innerText + "\n"

}

function legendaEtapa(){
    for (var i = 0 in etapa)
        if (etapa[i].checked) 
            legenda.innerHTML = etapa[i].value
    /*
    for (var i = 0 in etapa)
        if (etapa[i].checked) 
            Gresp0.innerHTML = "- Qual etapa da consultoria: " +  etapa[i].value */
}

function infoGeral(){
    for (var i = 0 in etapa)
        if (etapa[i].checked) 
            Gresp0.innerHTML = "- Qual etapa da consultoria: " +  etapa[i].value

            
    Gresp1.innerHTML = "- Porcentagem de uso: " + uso.value + "%"
    Gresp2.innerHTML = "- Quem participou da consultoria/departamento: " + parcicipantes.value 

    for (var i = 0 in horario)
        if (horario[i].checked) 
         Gresp3.innerHTML ="- Atrasaram para a consultoria: " + horario[i].value;

    for (var i = 0 in atividades)
        if (atividades[i].checked) 
            Gresp4.innerHTML ="- Realizaram as atividades anteriores: " + atividades[i].value;

    for (var i = 0 in duvidas)
        if (duvidas[i].checked) 
            Gresp5.innerHTML ="- Dúvidas/Dificuldades da etapa anterior: " + duvidas[i].value;

    for (var i = 0 in participativos)
        if (participativos[i].checked) 
            Gresp6.innerHTML ="- Participativos: " + participativos[i].value;

    for (var i = 0 in problema)
        if (problema[i].checked) 
            Gresp7.innerHTML ="- Algum problema: " + problema[i].value;
    
    for (var i = 0 in nota)
        if (nota[i].checked) 
            Gresp8.innerHTML ="- Nota para a consultoria: " + nota[i].value; 
    
    Gresp9.innerText = "- Informações adicionais: " + geralObs.value + "\n"
    
    if (radioBackup[1].checked){
        telaBackup.style.display = "none"
        Gresp10.innerText = ""
        Gresp11.innerText = ""
        Gresp12.innerText = ""
    } else {
    Gresp10.innerText ="\n" + "** Informações para o Backup **" + "\n" + "- Cliente comprometido: " + comprometido.value
    Gresp11.innerText = "- Cliente tecnológico: " + tecnologico.value
    Gresp12.innerText = "Informações para consultoria do Backup:  " + etapaBackup.value
    }

    Gresp13.innerText = "- Ticket da consultoria: " + ticketConsult.value

    falta.style.display = "none";
    // Botao de copiar 
    respCopy.innerHTML = Gresp0.innerText + "\n" 
    + Gresp1.innerText + "\n" + Gresp2.innerText + "\n" 
    + Gresp3.innerText + "\n"
    + Gresp4.innerText + "\n"
    + Gresp5.innerText + "\n"
    + Gresp6.innerText + "\n"
    + Gresp7.innerText + "\n"
    + Gresp8.innerText + "\n"
    + Gresp13.innerText + "\n"
    + Gresp9.innerText + "\n"
    + Gresp10.innerText + "\n"
    + Gresp11.innerText + "\n"
    + Gresp12.innerText + "\n"
}

/*
function infoBackup(){
    Gresp10.innerText ="\n" + "** Informações para o Backup **" + "\n" + "- Cliente comprometido: " + comprometido.value
    Gresp11.innerText = "- Cliente tecnológico: " + tecnologico.value
    Gresp12.innerText = "Informações para consultoria do Backup:  " + etapaBackup.value
}
*/


function textoMigra(){
    Mresp1.innerHTML = " ** Checkout Migração ** " + "<br><br>" + "- Valor do Acessórias: " + valorMigra.value
    Mresp2.innerHTML = "- Referencia técnica e seu departamento: " + referenciaMigra.value
    Mresp3.innerHTML = "- Melhor forma de contato:  " + formaContato.value
    Mresp4.innerHTML = "- Equipe engajada? Quais?: " + equipeEngajada.value
    Mresp5.innerHTML = "- Dispensa em massa: " + dispensaMassa.value
    Mresp6.innerHTML = "- ERP: " + erp.value
    Mresp7.innerHTML = "- SMTP Ativo: " + smtp.value
    Mresp8.innerHTML = "- Uso: " + regUso.value + "%"
    Mresp9.innerHTML = "- Acesso: " + acesso.value + "%"
    Mresp10.innerHTML = "- Entregas:  " + entregas.value + "%"
    Mresp11.innerHTML = "- Robô:  " + robo.value + "%"
    Mresp12.innerHTML = "- Gestão de Processos: " + gestao.value
    Mresp13.innerHTML = "- APP: " + app.value
    Mresp14.innerHTML = "- APLA: " + apla.value
    Mresp16.innerHTML = "- Número do Ticket de Finalização dos treinamentos: " + ticketFinal.value
    Mresp17.innerHTML = "- Houve dispensa de treinamento ? Se sim, qual numero do ticket?: " + dispensaTicket.value
    Mresp15.innerText = "- Informações adicionais:  " + Minfo.value

    respCopy.innerHTML = Mresp1.innerText + "\n" + Mresp2.innerText + "\n" 
    + Mresp3.innerText + "\n"
    + Mresp4.innerText + "\n"
    + Mresp5.innerText + "\n"
    + Mresp6.innerText + "\n"
    + Mresp7.innerText + "\n"
    + Mresp8.innerText + "\n"
    + Mresp9.innerText + "\n"
    + Mresp10.innerText + "\n"
    + Mresp11.innerText + "\n"
    + Mresp12.innerText + "\n" 
    + Mresp13.innerText + "\n"
    + Mresp14.innerText + "\n"
    + Mresp16.innerText + "\n"
    + Mresp17.innerText + "\n"
    + Mresp15.innerText + "\n"
}


function acompTexto(){
    let AregUso = document.getElementById('AregUso')
    let Aacesso = document.getElementById('Aacesso')
    let Aentregas = document.getElementById('Aentregas')
    let Arobo = document.getElementById('Arobo')

    Aresp1.innerHTML = "- Contato com: " + contato.value
    Aresp2.innerHTML = "- Uso: " + AregUso.value + "%"
    Aresp3.innerHTML = "- Acesso: " + Aacesso.value + "%"
    Aresp4.innerHTML = "- Entregas: " + Aentregas.value + "%"
    Aresp5.innerHTML = "- Robôs: " + Arobo.value + "%"
    Aresp6.innerText = "- Tratativa: " + tratativa.value

    if (radioBackup2[1].checked){
        telaBackup2.style.display = "none"
        Aresp7.innerText = ""
        Aresp8.innerText = ""
        Aresp9.innerText = ""
    } else {
        Aresp7.innerText ="\n" + "** Informações para o Backup **" + "\n" + "- Cliente comprometido: " + comprometido2.value
        Aresp8.innerText = "- Cliente tecnológico: " + tecnologico2.value
        Aresp9.innerText = "Informações para consultoria do Backup:  " + etapaBackup2.value
    }
    
    Aresp10.innerText = "- Ticket: " + ticketAcomp.value


    respCopy.innerHTML = Aresp1.innerText + "\n" + Aresp10.innerText + "\n"
    + Aresp2.innerText + "\n" 
    + Aresp3.innerText + "\n"
    + Aresp4.innerText + "\n"
    + Aresp5.innerText + "\n"
    + Aresp6.innerText + "\n"
    + Aresp7.innerText + "\n"
    + Aresp8.innerText + "\n"
    + Aresp9.innerText       

    
    

}

async function copResp(){
    //document.querySelector("#respCopy").select();
    //document.execCommand("copy")
    let text = document.querySelector("#respCopy").value;
    await navigator.clipboard.writeText(text);
}


function pergBackup(){
    if (radioBackup[1].checked){
        telaBackup.style.display = "none"
        Gresp10.innerText = ""
        Gresp11.innerText = ""
        Gresp12.innerText = ""

    } else {
        telaBackup.style.display = "inline-block"
    }
}

function pergBackup2(){
    if (radioBackup2[1].checked){
        telaBackup2.style.display = "none"
        Aresp7.innerText = ""
        Aresp8.innerText = ""
        Aresp9.innerText = ""

    } else {
        telaBackup2.style.display = "inline-block"
    }
}

function faltou(){
    if (horario[4].checked){
        falta.style.display = "block"
    } else {
        falta.style.display = "none"
    }
}

function copRespFalta(){
    document.querySelector("#faltaCliente").select();
    document.execCommand("copy")
}

/* 
let valorMigra = document.getElementById('valorMigra')
let referenciaMigra = document.getElementById('referenciaMigra')
let formaContato = document.getElementById('formaContato')
let equipeEngajada = document.getElementById('equipeEngajada')
let dispensaMassa = document.getElementById('dispensaMassa')
let erp = document.getElementById('erp')
let smtp = document.getElementById('smtp')
let regUso = document.getElementById('regUso')
let acesso = document.getElementById('acesso')
let entregas = document.getElementById('entregas')
let robo = document.getElementById('robo')
let gestao = document.getElementById('gestao')
let app = document.getElementById('app')
let apla = document.getElementById('apla')


** Checkout Migração **

- Valor do Acessórias: 
- Referencia técnica e seu departamento: 
- Melhor forma de contato: 
- Equipe engajada? Quais?: 
- Dispensa em massa: 
- ERP: 
- SMTP Ativo:
- Uso:%
- Acesso:%
- Entregas: %
- Robô: %
- Gestão de Processos:
- APP: 
- APLA:
- Considerações adicionais: 

*/