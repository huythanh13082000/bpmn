export const xml = `<?xml version="1.0" encoding="UTF-8"?>
<bpmn:definitions xmlns:bpmn="http://www.omg.org/spec/BPMN/20100524/MODEL" xmlns:bpmndi="http://www.omg.org/spec/BPMN/20100524/DI" xmlns:dc="http://www.omg.org/spec/DD/20100524/DC" xmlns:di="http://www.omg.org/spec/DD/20100524/DI" id="Definitions_17576rk" targetNamespace="http://bpmn.io/schema/bpmn" exporter="Camunda Modeler" exporterVersion="4.3.0-nightly.20200929">
  <bpmn:collaboration id="Collaboration_01vvx0q">
    <bpmn:participant id="Participant_061mhru" processRef="Process_0dujmh1" />
  </bpmn:collaboration>
  <bpmn:process id="Process_0dujmh1" isExecutable="true">
    <bpmn:startEvent id="Event_0auamv8" name="Khách hàng">
      <bpmn:outgoing>Flow_1ktuev8</bpmn:outgoing>
    </bpmn:startEvent>
    <bpmn:exclusiveGateway id="Gateway_12zdndk" name="Bảo hành">
      <bpmn:incoming>Flow_1ktuev8</bpmn:incoming>
      <bpmn:outgoing>Flow_0np22z8</bpmn:outgoing>
      <bpmn:outgoing>Flow_18kpldz</bpmn:outgoing>
    </bpmn:exclusiveGateway>
    <bpmn:sequenceFlow id="Flow_1ktuev8" sourceRef="Event_0auamv8" targetRef="Gateway_12zdndk" />
    <bpmn:task id="Activity_1scr6lr" name="Thực hiện bảo hành">
      <bpmn:incoming>Flow_0np22z8</bpmn:incoming>
    </bpmn:task>
    <bpmn:sequenceFlow id="Flow_0np22z8" name="Yes" sourceRef="Gateway_12zdndk" targetRef="Activity_1scr6lr" />
    <bpmn:task id="Activity_1bhdtu0" name="Nhắc khách mua bảo hành">
      <bpmn:incoming>Flow_18kpldz</bpmn:incoming>
    </bpmn:task>
    <bpmn:sequenceFlow id="Flow_18kpldz" name="No" sourceRef="Gateway_12zdndk" targetRef="Activity_1bhdtu0" />
  </bpmn:process>
  <bpmndi:BPMNDiagram id="BPMNDiagram_1">
    <bpmndi:BPMNPlane id="BPMNPlane_1" bpmnElement="Collaboration_01vvx0q">
      <bpmndi:BPMNShape id="Participant_061mhru_di" bpmnElement="Participant_061mhru" isHorizontal="true">
        <dc:Bounds x="260" y="90" width="600" height="310" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNEdge id="Flow_1ktuev8_di" bpmnElement="Flow_1ktuev8">
        <di:waypoint x="378" y="190" />
        <di:waypoint x="435" y="190" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_0np22z8_di" bpmnElement="Flow_0np22z8">
        <di:waypoint x="485" y="190" />
        <di:waypoint x="550" y="190" />
        <bpmndi:BPMNLabel>
          <dc:Bounds x="509" y="172" width="18" height="14" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_18kpldz_di" bpmnElement="Flow_18kpldz">
        <di:waypoint x="460" y="215" />
        <di:waypoint x="460" y="300" />
        <di:waypoint x="550" y="300" />
        <bpmndi:BPMNLabel>
          <dc:Bounds x="468" y="255" width="15" height="14" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNShape id="Event_0auamv8_di" bpmnElement="Event_0auamv8">
        <dc:Bounds x="342" y="172" width="36" height="36" />
        <bpmndi:BPMNLabel>
          <dc:Bounds x="331" y="215" width="59" height="14" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Gateway_12zdndk_di" bpmnElement="Gateway_12zdndk" isMarkerVisible="true">
        <dc:Bounds x="435" y="165" width="50" height="50" />
        <bpmndi:BPMNLabel>
          <dc:Bounds x="436" y="135" width="48" height="14" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Activity_1scr6lr_di" bpmnElement="Activity_1scr6lr">
        <dc:Bounds x="550" y="150" width="100" height="80" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Activity_1bhdtu0_di" bpmnElement="Activity_1bhdtu0">
        <dc:Bounds x="550" y="260" width="100" height="80" />
      </bpmndi:BPMNShape>
    </bpmndi:BPMNPlane>
  </bpmndi:BPMNDiagram>
</bpmn:definitions>`;
