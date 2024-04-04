 create view vw_funcionario select f. *, t.numero as telefone from funcionario f left join telefone t on f.matricula = t.matricula;
 