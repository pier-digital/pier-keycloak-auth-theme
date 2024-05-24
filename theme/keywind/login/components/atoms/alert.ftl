<#macro kw color="">
  <#switch color>
    <#case "error">
      <#assign colorClass="bg-pier-alert-error-bg text-pier-alert-error-text">
      <#break>
    <#case "info">
      <#assign colorClass="bg-pier-alert-info-bg text-pier-alert-info-text">
      <#break>
    <#case "success">
      <#assign colorClass="bg-pier-alert-success-bg text-pier-alert-success-text">
      <#break>
    <#case "warning">
      <#assign colorClass="bg-pier-alert-warning-bg text-pier-alert-warning-text">
      <#break>
    <#default>
      <#assign colorClass="bg-pier-alert-info-bg text-pier-alert-info-text">
  </#switch>

  <div class="${colorClass} p-4 rounded-lg text-sm" role="alert">
    <#nested>
  </div>
</#macro>
