import { Modal, useModal } from '@/shared/ui/modal';
import { FormField } from '@/shared/ui/formfield';
import { Input } from '@/shared/ui/input/Input';
import { Button } from '@/shared/ui/Button';

export function PasswordChangeModal() {
  const { isOpen, open, close } = useModal();

  // TODO: 비밀번호 변경 모달 useForm
  // TODO: 새 비밀번호와 새 비밀번호 확인 일치 여부 검사 로직
  // TODO: 비밀번호 변경 API 호출 성공 시 모달 닫기

  return (
    <Modal isOpen={isOpen} open={open} close={close}>
      <Button
        type="button"
        variant="primary"
        size="sm"
        onClick={open}
        className="w-18.5 font-['Pretendard'] text-[14px] font-semibold whitespace-nowrap"
      >
        변경하기
      </Button>

      <Modal.Content size="md" showCloseButton={false}>
        <Modal.Header className="pt-8 pb-4">
          <Modal.Title className="text-txt-primary w-full text-center text-lg font-bold">
            비밀번호 변경하기
          </Modal.Title>
        </Modal.Header>

        <Modal.Body className="flex flex-col gap-5 px-4 sm:px-6">
          <FormField>
            <FormField.Label className="text-sm font-semibold">새 비밀번호</FormField.Label>
            <FormField.Control>
              <Input type="password" placeholder="새 비밀번호를 입력해주세요." />
            </FormField.Control>
          </FormField>

          <FormField>
            <FormField.Label className="text-sm font-semibold">새 비밀번호 확인</FormField.Label>
            <FormField.Control>
              <Input type="password" placeholder="새 비밀번호를 다시 한 번 입력해주세요." />
            </FormField.Control>
          </FormField>
        </Modal.Body>

        <Modal.Footer className="flex w-full gap-2 px-4 pt-6 pb-8 sm:px-6">
          <Modal.Close asChild>
            <Button
              variant="outline"
              size="lg"
              className="text-txt-secondary flex-1"
              aria-label="비밀번호 변경 모달 닫기"
            >
              닫기
            </Button>
          </Modal.Close>
          <Button variant="primary" size="lg" className="flex-1">
            변경하기
          </Button>
        </Modal.Footer>
      </Modal.Content>
    </Modal>
  );
}
